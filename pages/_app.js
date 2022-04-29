import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout name="layoutName">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
