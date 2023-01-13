import React from "react";
import { Button } from "react-bootstrap";
import Backdrop from "./backdrop";
import styles from "./modal.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Modal({
  showModal,
  onCancel,
  title,
  content,
  footer,
  error
}) {
  return (
    <>
      {showModal && <Backdrop onClick={onCancel} />}
      {showModal && (
        <div className={`${styles.modal} ${error && styles.error}`}>
          <header className={styles.header}>
            <h2>{title}</h2>
            <div className={styles.close} onClick={onCancel}>
              <IoMdCloseCircleOutline />
            </div>
          </header>
          <div className={styles.content}>
            <div>{content}</div>
          </div>
          <div className={styles.actions}>{footer}</div>
        </div>
      )}
    </>
  );
}
