import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";
import Time from "react-time-format";
import utils from "../../styles/utils.module.css";

export default function MessageItem({ big, message }) {
  const { title, username, content, slug, date } = message;
  return (
    <div>
      {big ? (
        <div>
          <div className="small">
            <Time value={date} format="YYYY/MM/DD hh:mm"></Time>{" "}
          </div>
          <div className="small">{username}</div>
          <div className={`${utils.title}`}>{title}</div>
          <div>{content}</div>
        </div>
      ) : (
        <Link className={``} href={`/messages/${slug}`}>
          <Card className={`${utils.card} my-2`}>
            <div className="small">
              <Time value={date} format="YYYY/MM/DD hh:mm"></Time>{" "}
            </div>
            <div className="small">{username}</div>
            <div className={`${utils.title}`}>{title}</div>
          </Card>
        </Link>
      )}
    </div>
  );
}
