import "../styles/globals.css";
import FloatingCta from "../components/FloatingCta";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingCta />
    </>
  );
}
