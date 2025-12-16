import "../styles/globals.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/aos/aos.js";
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          once: true,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/aos/aos.css" />
      <Component {...pageProps} />
    </>
  );
}
