import React from 'react';
import "../styles/styles.css"
// import Footer from '../components/Footer';
import Link from '../components/Link';
import { FaApple, FaFacebook, FaInstagram, FaYoutube, FaSoundcloud, FaEnvelope, FaSpotify } from "react-icons/fa";

export default function Links() {
  return (
    <div>
        <div className="linktree-content">
            <div className="lt-left">
                <div className="lt-img">
                    <div className="lt-img2">
                    <img src="/Gallery/8.JPG" alt="" />
                    </div>
                    <div className="links-icons">
                        <a href="https://music.apple.com/us/artist/khanm/1639741390" target="_blank" rel="noopener noreferrer">
                            <FaApple className="icon" style={{ marginLeft: "0" }} />
                        </a>
                        <a href="https://www.facebook.com/khanmmusic" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="icon" />
                        </a>
                        <a href="https://www.instagram.com/khanmmusic" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                        <a href="https://open.spotify.com/artist/5vxQdFbSWYF1Zj99jajZU7?si=m3Wt5LS2T6ikM5qIIaSTKw&nd=1" target="_blank" rel="noopener noreferrer">
                            <FaSpotify className="icon" />
                        </a>
                        <a href="https://soundcloud.com/khan-hp" target="_blank" rel="noopener noreferrer">
                            <FaSoundcloud className="icon" />
                        </a>
                        <a href="https://www.youtube.com/@khanm" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="icon" />
                        </a>
                        <a href="mailto:khanm.official@email.com">
                            <FaEnvelope className="icon" />
                        </a>
                    </div>
                </div>

                <div className="lt-links">
                    <Link title="Main Kaun Hoon" artist="Khanm"  cl="feat" cl2="feat2" imgsrc="./SCA/mkh.jpg" link="https://distrokid.com/hyperfollow/khanm/main-kaun-hoon" />
                    <Link title="Youtube" icon="Youtube" link="https://youtube.com/@khanm" />
                    <Link title="Spotify" icon="Spotify" link="https://open.spotify.com/artist/5vxQdFbSWYF1Zj99jajZU7?si=m3Wt5LS2T6ikM5qIIaSTKw&nd=1" />
                    <Link title="Instagram" icon="Instagram" link="https://www.instagram.com/khanmmusic" />
                    <Link title="SoundCloud" icon="SoundCloud" link="https://soundcloud.com/khan-hp" />
                    <Link title="Apple Music" icon="Apple" link="https://music.apple.com/us/artist/khanm/1639741390" />
                </div>
            </div>

            <div className="lt-right">
                <iframe style={{borderRadius:'12px', border: "none"}} src="https://open.spotify.com/embed/artist/5vxQdFbSWYF1Zj99jajZU7?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
      {/* <Footer/> */}
    </div>
  )
}
