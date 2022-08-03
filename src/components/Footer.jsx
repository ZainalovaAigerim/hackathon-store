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
        <img src={instagramIcon} alt="" />
        <img src={messengerIcon} alt="" />
        <img src={twitterIcon} alt="" />
      </div>
    </div>
  );
}

export default Footer;
