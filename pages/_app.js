import "../styles/globals.css";
import { useEffect } from "react";
import PathName from "../hooks/pathName";

function MyApp({ Component, pageProps }) {
  const path = PathName();
  useEffect(() => {
    document.body.className = path;
  });
  return <Component {...pageProps} />;
}

export default MyApp;
