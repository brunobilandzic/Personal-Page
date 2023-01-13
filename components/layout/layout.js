import Head from "next/head";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../redux/slices/errorSlice";
import { clearLoading, setLoading } from "../../redux/slices/loadingSlice";
import Loading from "./loading";
import Modal from "./modal";
import NavbarComponent from "./navbar";
import { useEffect } from "react";
import Router from "next/router";


export default function Layout({ children }) {
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    const start = () => {
      console.log("start");
      dispatch(setLoading());
    };
    const end = () => {
      console.log("finished");
      dispatch(clearLoading());
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content="Bruno Bilandzic personal page" />
      </Head>
      <Modal
        error
        showModal={error.hasError}
        title={<div>Error</div>}
        content={<p>{error.message}</p>}
        onCancel={() => dispatch(clearError())}
        footer={
          <>
            <Button
              className="btn-danger"
              onClick={() => dispatch(clearError())}
            >
              Cancel
            </Button>
          </>
        }
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarComponent />
          <div className={`container`}>{children}</div>
        </>
      )}
    </>
  );
}
