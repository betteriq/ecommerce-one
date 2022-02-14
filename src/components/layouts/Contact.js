import React, { useEffect } from "react";
const Contact = () => {
  return (
    <div className="main-container">
      <div className="container contact-form">
        <div>
          <h2>Contact Form</h2>
          <div>
            <div className="contact-item">
              <img
                src="./images/icons/icons8-gmail-64.png"
                alt="calling"
                className="icon-contact"
              />
              <h4>
                Email :{" "}
                <a href="mailto:anoushrs@gmail.com">anoushrs@gmail.com</a>
              </h4>
            </div>
            <div className="contact-item">
              <img
                src="./images/icons/icons8-phone-48.png"
                alt="calling"
                className="icon-contact"
              />
              <h4>
                MobNumber : <a href="tel:00989376030929">Telphon number</a>
              </h4>
            </div>
            <div className="contact-item">
              <img
                src="./images/icons/icons8-telegram-app.svg"
                alt="calling"
                className="icon-contact"
              />
              <h4>
                Telegram : <a href="https://t.me/erc720">Telegram</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
