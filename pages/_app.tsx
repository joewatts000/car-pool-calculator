import { Analytics } from '@vercel/analytics/react';
import { IsClientCtxProvider } from '../misc/ClientContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <IsClientCtxProvider>
        <Component {...pageProps} />
      </IsClientCtxProvider>
      <Analytics />
    </>
  );
}
