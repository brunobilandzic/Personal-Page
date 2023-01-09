import React from "react";
import { Alert } from "react-bootstrap";
import utils from "../../styles/utils.module.css";
import { BsExclamationCircleFill } from "react-icons/bs";

export default function FormError({ message }) {
  return (
    <Alert className={utils.formError} variant="danger">
      <div className={utils.alertText}>
        {message}
      </div>
      
      <BsExclamationCircleFill className={utils.alertIcon} />
    </Alert>
  );
}
