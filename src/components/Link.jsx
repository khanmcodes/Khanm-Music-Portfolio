import React from "react";
import { FaApple, FaFacebook, FaInstagram, FaYoutube, FaSoundcloud, FaEnvelope, FaSpotify } from "react-icons/fa";

const icons = {
  Youtube: <FaYoutube />,
  Apple: <FaApple />,
  Facebook: <FaFacebook />,
  Instagram: <FaInstagram />,
  Email: <FaEnvelope />,
  Spotify: <FaSpotify />,
  SoundCloud: <FaSoundcloud/>
};

export default function Link({ title, artist, icon, imgsrc, link, cl, cl2 }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="link">
      <div className={`linkFrame ${cl2}`}>
        <div className="linkIconPH">
            {imgsrc ? (
            <img src={imgsrc} alt={title} className="linkIcon ltimg" />
            ) : (
            <div className="linkIcon">{icons[icon]}</div>
            )}
        </div>
        <div className={`${cl} linkTitlePH`}>
            <div className="linkTitle">{title}</div>
            <div className="linkArtist">{artist}</div>
        </div>
      </div>
    </a>
  );
}
