import Head from "next/head";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../redux/slices/errorSlice";
import Modal from "./modal";
import NavbarComponent from "./navbar";

export default function Layout({ children }) {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
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
            <Button className="btn-danger" onClick={() => dispatch(clearError())}>Cancel</Button>
          </>
        }
      />
      <NavbarComponent />
      <div className={`container`}>{children}</div>
    </>
  );
}
