import React from "react";
import styles from "./backdrop.module.css";

export default function Backdrop({ onClick }) {
  return <div className={styles.backdrop} onClick={onClick}></div>;
}
