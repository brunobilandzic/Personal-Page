import React from "react";
import styles from "./loading.module.css";
import { PulseLoader } from "react-spinners";

export default function Loading({ onClick }) {
  return (
    <div className={styles.loading} onClick={onClick}>
      <div className={styles.spinner}>
        <PulseLoader color={"#D9F6D5"} loading={true} size={15} />
      </div>
    </div>
  );
}
