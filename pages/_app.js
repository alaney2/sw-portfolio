import '@/styles/globals.css'
import CursorProvider from '@/components/CursorProvider';

export default function App({ Component, pageProps }) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
    </CursorProvider>
  );
};
