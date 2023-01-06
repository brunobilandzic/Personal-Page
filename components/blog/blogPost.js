import React from "react";
import styles from "./blogPost.module.css";

import Time from "react-time-format";
export default function BlogPost({ sys, fields }) {
  return (
    <div className={`${styles.big}`}>
      <div className="small">
        <Time value={sys.createdAt} format="YYYY/MM/DD hh:mm"></Time>{" "}
      </div>
      <div className="small">{fields.category}</div>
      <div className={`${styles.title}`}>{fields.title}</div>
      <div>{fields.content}</div>
    </div>
  );
}
