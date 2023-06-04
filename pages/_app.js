import '@/styles/globals.css'
import CursorProvider from '@/components/CursorProvider';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RFE5ZF7N5N" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RFE5ZF7N5N', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Analytics />
    </CursorProvider>
  );
};
