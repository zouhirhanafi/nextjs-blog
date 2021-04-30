import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <h1> titre commun</h1>
      <Component {...pageProps} />;
    </div>
  );
}
