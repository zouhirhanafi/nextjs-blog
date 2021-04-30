import { AppProps } from 'next/app'

import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1> titre commun</h1>
      <Component {...pageProps} />;
    </div>
  );
}
