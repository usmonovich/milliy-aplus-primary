/// <reference types="vite/client" />

declare const __APP_VERSION__: string;
declare module 'katex' {
  const katex: { renderToString(tex: string, opts?: { displayMode?: boolean; throwOnError?: boolean }): string };
  export default katex;
}
declare module 'katex/dist/katex.min.css';
