import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import { RootContextProvider } from '../contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootContextProvider>
      <Component {...pageProps} />
    </RootContextProvider>
  );
}

export default MyApp;
