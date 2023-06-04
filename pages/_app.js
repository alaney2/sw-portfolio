import '@/styles/globals.css'
import CursorProvider from '@/components/CursorProvider';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
      <Analytics />
    </CursorProvider>
  );
};
