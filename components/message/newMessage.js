import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import {
  validate,
  VALIDATOR_MAX_LENGTH,
  VALIDATOR_REQUIRED,
} from "../../lib/validators";
import utils from "../../styles/utils.module.css";
import FormError from "../layout/formError";

const initialMessage = {
  title: {
    value: "",
    validators: [
      VALIDATOR_REQUIRED("Title"),
      VALIDATOR_MAX_LENGTH("Title", 30),
    ],
    validationMessage: null,
    isTouched: false,
  },
  username: {
    value: "",
    validators: [VALIDATOR_MAX_LENGTH("Username", 30)],
    isTouched: false,
    validationMessage: null,
  },
  content: {
    value: "",
    validators: [VALIDATOR_REQUIRED("Content")],
    isTouched: false,
    validationMessage: null,
  },
}

export default function NewMessage() {
  const [message, setMessage] = useState(initialMessage);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    isSubmitDisabled();
  }, [message]);

  const onInputClick = (e) => {
    setMessage({
      ...message,
      [e.target.id]: {
        ...message[e.target.id],
        isTouched: true,
        validationMessage: validate(
          e.target.value,
          message[e.target.id].validators
        ),
      },
    });
  };

  const onInputChange = (e) => {
    setMessage({
      ...message,
      [e.target.id]: {
        ...message[e.target.id],
        value: e.target.value,
        validationMessage: validate(
          e.target.value,
          message[e.target.id].validators
        ),
      },
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/newmessage", {
        title: message.title.value,
        username: message.username.value,
        content: message.content.value,
      });
      setMessage(initialMessage);
    } catch (error) {
      console.log(error);
    }
  };

  const isSubmitDisabled = () => {
    let isDisabled = false;
    Object.entries(message).forEach((entry) => {
      const [key, value] = entry;
      Object.entries(value).forEach((entry) => {
        const [key, value] = entry;
        if (key === "validationMessage" && value !== null) {
          setSubmitDisabled(true);
          isDisabled = true;
          return;
        }
        if (key === "isTouched" && !value) {
          setSubmitDisabled(true);
          isDisabled = true;
          return;
        }
      });
    });
    if (!isDisabled) {
      setSubmitDisabled(false);
    }
  };

  return (
    <div>
      <Form className="mb-5 pb-5" onSubmit={onSubmit}>
        <Form.Group className={utils.formGroup} controlId="title">
          <Form.Label className={utils.formLabel}>Title</Form.Label>
          <Form.Control
            className={
              message.title.isTouched &&
              !message.title.isValid &&
              utils.inputWIthError
            }
            autoComplete="off"
            type="text"
            placeholder="Enter title"
            value={message.title.value}
            onClick={onInputClick}
            onChange={onInputChange}
          />
          {message.title.isTouched && message.title.validationMessage && (
            <FormError message={message.title.validationMessage} />
          )}
        </Form.Group>
        <Form.Group className={utils.formGroup} controlId="username">
          <Form.Label className={utils.formLabel}>
            Username (optional)
          </Form.Label>
          <Form.Control
            autoComplete="off"
            type="text"
            placeholder="Enter username"
            value={message.username.value}
            onClick={onInputClick}
            onChange={onInputChange}
          />
          {message.username.isTouched && message.username.validationMessage && (
            <FormError message={message.username.validationMessage} />
          )}
        </Form.Group>
        <Form.Group className={utils.formGroup}>
          <Form.Label className={utils.formLabel}>Content</Form.Label>
          <textarea
            autoCapitalize="off"
            className="form-control"
            placeholder="Enter the contents of the message"
            rows="10"
            onClick={onInputClick}
            onChange={onInputChange}
            id="content"
            value={message.content.value}
          ></textarea>
          {message.content.isTouched && message.content.validationMessage && (
            <FormError message={message.content.validationMessage} />
          )}
        </Form.Group>
        <div>
          <br />
          <Button
            disabled={submitDisabled}
            type="submit"
            className={utils.actionBtn}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
