import Layout from "../components/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { SSRProvider } from "react-bootstrap";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </Provider>
  );
}

export default MyApp;
