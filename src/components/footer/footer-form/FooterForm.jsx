import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./FooterForm.css";

import useInput from "../../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const FooterForm = () => {
  const [formCurrent, setFormCurrent] = useState({});
  const formRef = useRef();
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(e.target);
    console.log("Submitted!");
    console.log(nameValue, emailValue, messageValue);

    setFormCurrent((prev) => ({
      ...prev,
      subject: "Hello from tester",
      user_name: nameValue,
      user_email: emailValue,
      message: messageValue,
    }));

    if (formCurrent) {
      emailjs
        .sendForm(
          "service_nvysbwo",
          "template_gfqc8f6",
          e.target,
          "LCyuVwyRhYktfjXai"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    resetName();
    resetEmail();
    resetMessage();
  };

  return (
    <form onSubmit={submitFormHandler} className="form" ref={formRef}>
      <div className="form__contacts">
        <div style={{ width: "100%", textAlign: "center" }}>
          <div className="fom__contacts-input">
            <div className="form__contacts">
              <label htmlFor="name">
                Name:
                {nameHasError && (
                  <span style={{ color: "red", fontSize: 12 }}>
                    please enter the name
                  </span>
                )}
              </label>
              <input
                className="form__contacts-name--input"
                type="text"
                id="name"
                name="user_name"
                value={nameValue}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
            </div>
            <div className="form__contacts">
              <label htmlFor="email">
                Email:
                {emailHasError && (
                  <span style={{ color: "red", fontSize: 12 }}>
                    please enter valid email
                  </span>
                )}
              </label>
              <input
                className="form__contacts-email--input"
                type="email"
                id="email"
                name="user_email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
            </div>
          </div>
          <div className="form-textarea">
            <div className="form-textarea__contacts">
              <label htmlFor="message">
                Message:
                {messageHasError && (
                  <span style={{ color: "red", fontSize: 12 }}>
                    {" "}
                    fild should be not empty
                  </span>
                )}
              </label>
              <textarea
                className="form__contacts-text--input"
                id="message"
                rows={4}
                value={messageValue}
                name="message"
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
              />
            </div>
            <button type="submit" disabled={!formIsValid}>
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FooterForm;
