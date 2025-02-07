import React from "react";
import {
  FaHome,
  FaApple,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
  FaEnvelope,
  FaSpotify,
} from "react-icons/fa";
import "../styles/styles.css";
import { Link, NavLink } from "react-router";

function LNavbar() {
  return (
    <div className="navbar">
      <div className="Hnav">
        <div style={{ width: "23%" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="logoTitle">Khanm</h1>
          </Link>
        </div>

        <div className="homeIcon">
          <Link to="/" end>
            <FaHome className="icon" />
          </Link>
        </div>

        <div className="nav-icons">
          <a
            href="https://music.apple.com/us/artist/khanm/1639741390"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple className="icon" />
          </a>
          <a
            href="https://www.facebook.com/khanmmusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://www.instagram.com/khanmmusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://open.spotify.com/artist/5vxQdFbSWYF1Zj99jajZU7?si=m3Wt5LS2T6ikM5qIIaSTKw&nd=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify className="icon" />
          </a>
          <a
            href="https://soundcloud.com/khan-hp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSoundcloud className="icon" />
          </a>
          <a
            href="https://www.youtube.com/@khanm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icon" />
          </a>
          <a href="mailto:khanm.official@email.com">
            <FaEnvelope className="icon" style={{ marginRight: "50px" }} />
          </a>
        </div>
      </div>

      <div className="Vnav">
        <nav className="nav-links">
          <NavLink to="/music" end>
            MUSIC
          </NavLink>
          <NavLink to="/videos" end>
            VIDEOS
          </NavLink>
          <NavLink to="/about" end>
            ABOUT
          </NavLink>
          <NavLink to="/links" end>
            LINKS
          </NavLink>
          <Link to="/" end>
            <FaHome className="homeIconMob" />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default LNavbar;
