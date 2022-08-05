import React from "react";
import instagramIcon from "../imgs/instagram.png";
import messengerIcon from "../imgs/messenger.png";
import twitterIcon from "../imgs/twitter.png";

function Footer() {
  return (
    <div className="contacts">
      <h2>
        +996 705 275 274 <br /> stayhome@store.kg
      </h2>
      <h4>
        По любым вопросам и для заказа свяжитесь с нами по телефону, почте и в
        соцсетях.
      </h4>
      <div className="social-media-icons">
        <a target="_blank" href="https://www.instagram.com/">
          {" "}
          <img src={instagramIcon} alt="" />
        </a>
        <a target="_blank" href="https://www.messenger.com/">
          <img src={messengerIcon} alt="" />
        </a>
        <a target="_blank" href="https://www.twitter.com/">
          <img src={twitterIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
