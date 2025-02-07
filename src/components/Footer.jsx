import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
  FaEnvelope,
  FaSpotify,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-MostLeft">
          <h2 className="footer-title">Khanm</h2>
          <p className="footer-subtitle">Contact</p>
          <p className="footer-email">khanm.official@gmail.com</p>
          <div className="footer-icons">
            <a
              href="https://music.apple.com/us/artist/khanm/1639741390"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple className="icon" style={{ marginLeft: "0" }} />
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
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>

        <div className="footer-left" style={{ marginTop: "35px" }}>
          <p style={{ fontWeight: "100", fontSize: "10px" }}>Discography</p>
          <p>Music</p>
          <p>Videos</p>
          <p>Albums</p>
        </div>

        <div className="footer-center">
          <p>Latest Release</p>
          <p>Featured</p>
          <p>Links</p>
        </div>

        <div className="footer-right">
          <p>About</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Khanm. All rights reserved.</p>
        <div className="footer-links">
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
