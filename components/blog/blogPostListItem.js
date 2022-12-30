import Link from "next/link";
import React from "react";
import Time from "react-time-format";
export default function BlogPostListItem({ sys, fields }) {
  return (
    <Link
      className={`text-inherit hover:no-underline`}
      href={ `/blog/${fields.slug}`}
    >
      <article className={`px-2 mb-3  border-2 border-500 rounded-lg`}>
        <div className="text-sm text-gray-400">
          <Time value={sys.createdAt} format="YYYY/MM/DD hh:mm"></Time>{" "}
        </div>
        <div className="text-green-300">{fields.category}</div>
        <div className="text-xl">{fields.title}</div>
      </article>
    </Link>
  );
}
