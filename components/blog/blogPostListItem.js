import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import Time from "react-time-format";
import utils from "./blogPost.module.css";

export default function BlogPostListItem({ sys, fields }) {
  return (
    <Link className={``} href={`/blog/${fields.slug}`}>
      <Card className={`${utils.card} my-2`}>
        <div className="small">
          <Time value={sys.createdAt} format="YYYY/MM/DD hh:mm"></Time>{" "}
        </div>
        <div className="small">{fields.category}</div>
        <div className={`${utils.title}`}>{fields.title}</div>
      </Card>
    </Link>
  );
}
