import React from "react";
import NewMessage from "../../components/message/newMessage";
import utils from "../../styles/utils.module.css";

export default function New() {
  return (
    <div>
      <div className="mt-3 mb-4">
        <div className={utils.headingL}>New message</div>
        <div className="small">
          Here, I invite you to leave any comment regarding me and my behaviour.
          <br />
          Your insight is very welcomed.
          <br />
          Use the langueage you feel comfortable with.
        </div>
      </div>
      <NewMessage />
    </div>
  );
}
