import React from "react";
import utils from "./blogPost.module.css";

import Time from "react-time-format";
export default function BlogPost({ sys, fields }) {
  return (
    <div className={`${utils.big}`}>
      <div className="small">
        <Time value={sys.createdAt} format="YYYY/MM/DD hh:mm"></Time>{" "}
      </div>
      <div className="small">{fields.category}</div>
      <div className={`${utils.title}`}>{fields.title}</div>
      <div>{fields.content}</div>
    </div>
  );
}
