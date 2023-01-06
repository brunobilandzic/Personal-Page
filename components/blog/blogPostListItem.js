import Link from "next/link";
import React from "react";
import Time from "react-time-format";
export default function BlogPostListItem({ sys, fields }) {
  return (
    <Link
      className={``}
      href={ `/blog/${fields.slug}`}
    >
      <article className={``}>
        <div className="">
          <Time value={sys.createdAt} format="YYYY/MM/DD hh:mm"></Time>{" "}
        </div>
        <div className="">{fields.category}</div>
        <div className="">{fields.title}</div>
      </article>
    </Link>
  );
}
