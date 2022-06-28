import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Hoc/Layout";
import "../styles/main.css";
import Navbar from "../components/sections/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout >
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
