import React from 'react';
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-comp">
      <div className="mail-phone">
        <h1>Get in touch</h1>
        <div className="mail">
            <FaEnvelope/>
            <h4>Email</h4>
            <p>khanm.official@gmail.com</p>
        </div>

        <div className="phone">
            <FaPhone/>
            <h4>Phone</h4>
            <p>+92 370 2084069</p>
        </div>
      </div>
      <div className='contact-image'>
        <img src="/contact-img.jpg" alt="" />
      </div>
    </div>
  )
}
