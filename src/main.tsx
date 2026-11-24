import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { initStore } from './core/store';

// Service worker: offline + install. A newly installed worker means an update;
// the app shows a reload banner. Progress lives in IndexedDB and survives updates.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        w?.addEventListener('statechange', () => {
          if (w.state === 'installed' && navigator.serviceWorker.controller) window.dispatchEvent(new Event('sw-update'));
        });
      });
    }).catch(() => undefined);
  });
}

initStore().then(() => {
  createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
});
