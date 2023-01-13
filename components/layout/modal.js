import React from "react";
import { Button } from "react-bootstrap";
import Backdrop from "./backdrop";
import styles from "./modal.module.css";
import {IoMdCloseCircleOutline} from "react-icons/io";

export default function Modal({
  showModal,
  onCancel,
  title,
  content,
  canCancel,
  canConfirm,
  onConfirm,
}) {
  return (
    <>
      {showModal && <Backdrop onClick={onCancel} />}
      {showModal && (
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>{title}</h2>
            <div className={styles.close} onClick={onCancel}>
               <IoMdCloseCircleOutline />
            </div>
          </header>
          <div className={styles.content}>
            <div>{content}</div>
          </div>
          <div className={styles.actions}>
            {canCancel && (
              <Button className={`${styles.cencel}`} onClick={onCancel}>
                Cancel
              </Button>
            )}
            {canConfirm && (
              <Button className={`${styles.confirm}`} onClick={onConfirm}>
                Confirm
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
