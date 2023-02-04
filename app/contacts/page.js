"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import contacts from "/public/images/contacts/contacts.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toSend = {
    name: name,
    email: email,
    message: message,
  };
  const recaptchaRef = React.createRef();

  const notifySuccess = () => toast.success("Сообщение успешно отправлено!");
  const notifyFail = () => toast.error("Что-то пошл не так!");
  const notifyNoCapcha = () => toast.error("Нажмите на галочку");

  async function sendTelegrammMessage() {
    const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;

    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=175042839&text=${JSON.stringify(
        toSend
      )}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.ok === true) {
          notifySuccess();
        } else {
          notifyFail();
        }
      });
  }

  const handleSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    console.log(recaptchaValue);

    if (recaptchaValue) {
      console.log("есть галочка");
      sendTelegrammMessage();
      setName("Ваше имя");
      setEmail("name@example.com");
      setMessage("");
      recaptchaRef.current.reset();
    } else {
      notifyNoCapcha();
      console.log("нет галочки");
    }
  };

  return (
    <div className="container">
      <Toaster
        containerStyle={{
          top: 200,
        }}
      />

      <div
        className="row justify-content-center contactsContainer"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), url(${contacts.src})`,
          backgroundPosition: "center",
        }}
      >
        <div
          className="col-sm-6 border bg-white"
          style={{ marginTop: "10%", marginBottom: "10%", padding: "5%" }}
        >
          <div>
            <div className="mb-3">
              <label className="form-label">Имя</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Сообщение</label>
              <textarea
                name="message"
                className="form-control"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="row">
              <div className="col">

                
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_LOCAL}
                  // onChange={onReCAPTCHAChange}
                />
              </div>
              <div className="col text-center">
                <button
                  className="btn btn-secondary mt-4"
                  style={{ backgroundColor: "#929497" }}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
