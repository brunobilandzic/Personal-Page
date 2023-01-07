import React from "react";
import { Card } from "react-bootstrap";

export default function MessageItem({ title, content, username, slug }) {
  return (
    <Link className={``} href={`/messages/${slug}`}>
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
