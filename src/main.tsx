import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { flush, initStore } from './core/store';

const t0 = performance.now();

// Service worker: offline + install. A newly installed worker means an update;
// the app shows a reload banner. Progress lives in IndexedDB (mirrored to
// localStorage) and survives updates.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        w?.addEventListener('statechange', () => {
          if (w.state === 'installed' && navigator.serviceWorker.controller) window.dispatchEvent(new Event('sw-update'));
        });
      });
      // Home-screen apps on iOS rarely re-check for updates: check whenever the app comes back.
      document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') void reg.update().catch(() => undefined); });
    }).catch(() => undefined);
  });
}

/** Saves progress, then reloads into the new version. */
export async function applyUpdate() {
  await flush();
  location.reload();
}
window.addEventListener('apply-update', () => void applyUpdate());

// On-screen keyboard: hide the tab bar while a text field has focus (touch devices).
if (matchMedia('(pointer: coarse)').matches) {
  const isField = (el: EventTarget | null) => el instanceof HTMLElement && (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && !['checkbox', 'radio', 'range', 'file', 'button'].includes((el as HTMLInputElement).type)));
  document.addEventListener('focusin', (e) => { if (isField(e.target)) document.documentElement.classList.add('kb-open'); });
  document.addEventListener('focusout', () => setTimeout(() => { if (!isField(document.activeElement)) document.documentElement.classList.remove('kb-open'); }, 50));
}

initStore().then(() => {
  createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
  // keep the launch animation on screen briefly, then fade it out
  const splash = document.getElementById('splash');
  if (splash) {
    const wait = Math.max(0, 750 - (performance.now() - t0));
    setTimeout(() => { splash.style.opacity = '0'; setTimeout(() => splash.remove(), 400); }, wait);
  }
});
