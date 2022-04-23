import Head from "next/head";
import "../../public/style.css";
import { AppContextProvider } from "../contexts/appContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ATLAS x Kueh Kitchen</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>

      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}
