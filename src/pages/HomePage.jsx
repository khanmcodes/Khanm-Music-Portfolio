import React from "react";
import "../styles/styles.css";
import { FaTwitter, FaFacebook, FaWhatsapp, FaLink } from "react-icons/fa";
import FeaturedCard from "../components/FeaturedCard";
import LivePCard from "../components/livePCard";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

const HomePage = () => {
  const handleHover = (e) => {
    const card = e.currentTarget.children[0];
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 30;
    const y = ((e.clientY - top) / height - 0.5) * -30;

    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const resetHover = (e) => {
    e.currentTarget.children[0].style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <div className="homepage">
      {/* Hero Section */}

      <div className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h2 className="subtitle">Khanm, 20</h2>
          <p className="description">
            Hailing from the quaint town of Sukkur, Pakistan. <br />
            Singer and songwriter, Khanm captivates a diverse audience with his
            melodious English and Urdu/Hindi songs. Embracing cultural roots and
            global influences, making him a truly versatile and captivating
            artist.
          </p>
          <p className="release-info">
            Khanm released his debut single "Nightfall" in 2021.
          </p>
          <Link to="/music">
            <button className="btn" style={{ marginTop: "40px" }}>
              Discography
            </button>
          </Link>
        </div>
      </div>

      {/* New Release Section */}

      <div className="k-section">
        <div className="newRel">
          <div className="newRel-L">
            <p className="pageHeads" style={{ marginBottom: "150px" }}>
              Latest Release
            </p>
            <h1 className="newSongTitle" style={{ fontSize: "50px" }}>
              Main Kaun Hoon
            </h1>
            <p
              className="artistName"
              style={{
                fontSize: "25px",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Khanm
            </p>
            <a
              href="https://distrokid.com/hyperfollow/khanm/main-kaun-hoon"
              target="_blank"
            >
              <button className="btn" style={{ marginBottom: "90px" }}>
                Stream/Download
              </button>
            </a>
          </div>
          <div className="newRel-R">
            <div className="newRel-video">
              <iframe
                width="260"
                height="140"
                src="https://www.youtube.com/embed/-hIhKvdZBKg"
                title="YouTube video player"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div
              className="newRel-coverArt-container"
              onMouseMove={handleHover}
              onMouseLeave={resetHover}
            >
              <div className="newRel-coverArt"></div>
            </div>
            <div className="newRel-share" style={{ rotate: "0deg" }}>
              <p className="shareLabel">Share</p>
              <div className="share-icons">
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://distrokid.com/hyperfollow/khanm/main-kaun-hoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="shareIcon icon" />
                </a>

                <a
                  href="https://api.whatsapp.com/send?text=Check%20this%20out!%20https://distrokid.com/hyperfollow/khanm/main-kaun-hoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="shareIcon icon" />
                </a>

                <a
                  href="https://twitter.com/intent/tweet?url=https://distrokid.com/hyperfollow/khanm/main-kaun-hoon&text=Check%20this%20out!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="shareIcon icon" />
                </a>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(
                      "https://distrokid.com/hyperfollow/khanm/main-kaun-hoon"
                    );
                    alert("Link copied to clipboard!");
                  }}
                >
                  <FaLink className="shareIcon icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}

      <div className="k-section">
        <div className="inSection featured">
          <p className="pageHead">Featured</p>
          <div className="content">
            <div className="f-cards">
              <FeaturedCard
                title="Kya Kahen"
                artist="Khanm"
                cover="../SCA/kk.jpg"
                lnk="https://distrokid.com/hyperfollow/khanm/kya-kahen"
              />
              <FeaturedCard
                title="The K List"
                artist="Khanm"
                cover="../SCA/klist.jpg"
                lnk="https://open.spotify.com/playlist/4akQppRCI66u7c0YbCxK8Q?si=YoHQAsRkSbGMJDEkdLaOnw"
              />
              <FeaturedCard
                title="Mujh Se Ho Zara"
                artist="Khanm"
                cover="../SCA/mshz.jpg"
                lnk="https://distrokid.com/hyperfollow/khanm/mujh-se-ho-zara-feat-mahnoor-channa-2"
              />
            </div>
            <Link to="/music">
              <button className="btn2">Show More</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Videos Section */}

      <div className="k-section">
        <div className="inSection videos">
          <p className="pageHead">Videos</p>
          <div className="content">
            <div className="v-cards">
              <iframe
                className="videoFrame"
                src="https://www.youtube.com/embed/g618_J-4Sw8?si=d3_f1OzSI2pfbDBN"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                className="videoFrame"
                src="https://www.youtube.com/embed/oMX_HgGtWiI?si=GYuKxFPC4suTmsf3"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                className="videoFrame"
                src="https://www.youtube.com/embed/uIlJHHnECJI?si=YV6rIzI9yvDNVNJ9"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <Link to="/videos">
              <button className="btn2">Show All</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Live P Section */}

      <div className="k-section">
        <div className="inSection liveP">
          <p className="pageHead">Live Performance</p>
          <div className="lp-content">
            <div className="l-cards">
              <hr />
              <LivePCard
                place="Sukkur IBA"
                when="NOV 2024"
                img="../SCA/sibalive.JPG"
              />
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}

      <div className="k-section">
        <div className="inSection gallery">
          <p className="pageHead">Gallery</p>
          <div className="content">
            <div className="">
              <Gallery />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}

      <div className="k-section">
        <div className="inSection gallery">
          <p className="pageHead">Connect</p>
          <div className="contact-content">
            <div className="">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
