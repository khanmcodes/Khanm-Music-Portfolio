import { React, useState } from 'react';
import { FaTwitter, FaFacebook, FaWhatsapp, FaLink } from "react-icons/fa";

const singles = [
    { id: 1, title: "Main Kaun Hoon", artist: "Khanm", image: "./SCA/mkh.jpg", date: "Jan 31 2025", lnk:"https://distrokid.com/hyperfollow/khanm/main-kaun-hoon" },
    { id: 2, title: "Dil Kahan Hai", artist: "Khanm, Hpluskbeats", image: "./SCA/dkh.jpg", date: "Sep 20 2024", lnk:"https://distrokid.com/hyperfollow/khanm/dil-kahan-hai" },
    { id: 3, title: "EYES, SKIN AND MIND", artist: "Khanm", image: "./SCA/esm.jpg", date: "Jun 14 2024", lnk:"https://distrokid.com/hyperfollow/khanm/eyes-skin-and-mind" },
    { id: 4, title: "Awake", artist: "Khanm", image: "./SCA/awake.jpg", date: "Apr 29 2023", lnk:"https://distrokid.com/hyperfollow/khanm/awake" },
    { id: 5, title: "kya kahen", artist: "Khanm", image: "./SCA/kk.jpg", date: "Apr 23 2023", lnk:"https://distrokid.com/hyperfollow/khanm/kya-kahen" },
    { id: 6, title: "Stars", artist: "Khanm", image: "./SCA/s.jpg", date: "Jan 12 2023", lnk:"https://distrokid.com/hyperfollow/khanm/stars" },
    { id: 7, title: "Winter", artist: "Khanm", image: "./SCA/w.jpg", date: "Nov 25 2022", lnk:"https://distrokid.com/hyperfollow/khanm/winter" },
    { id: 8, title: "Just Be Mine", artist: "Khanm", image: "./SCA/jbm.jpg", date: "Sep 18 2022", lnk:"https://distrokid.com/hyperfollow/khanm/just-be-mine" },
    { id: 9, title: "Mujh Se Ho Zara", artist: "Khanm, Mahnoor Channa", image: "./SCA/mshz.jpg", date: "Aug 19 2022", lnk:"https://distrokid.com/hyperfollow/khanm/mujh-se-ho-zara-feat-mahnoor-channa-2" },
    { id: 10, title: "Like A Fool", artist: "Khanm", image: "./SCA/laf.jpg", date: "Jun 26 2022", lnk:"https://distrokid.com/hyperfollow/khanm/like-a-fool" },
    { id: 11, title: "How To Love", artist: "Khanm", image: "./SCA/htl.jpg", date: "May 14 2022", lnk:"https://distrokid.com/hyperfollow/khanm/how-to-love" },
    { id: 12, title: "Always", artist: "Khanm", image: "./SCA/a.jpg", date: "Feb 17 2022", lnk:"https://distrokid.com/hyperfollow/khanm/always" },
    { id: 13, title: "Where I Stay", artist: "Khanm", image: "./SCA/wis.jpg", date: "Jan 19, 2022", lnk:"https://youtu.be/vS940wq_Il4?si=dIh5ffCBDRZsmb0d" },
    { id: 14, title: "My Type", artist: "Khanm", image: "./SCA/mt.jpg", date: "Jan 1 2022", lnk:"https://distrokid.com/hyperfollow/khanm/my-type-remastered" },
    { id: 15, title: "Enormity", artist: "Khanm, Obnoxify", image: "./SCA/e.jpg", date: "Jun 24 2021", lnk:"https://distrokid.com/hyperfollow/khanm/enormity-feat-obnoxify" },
    { id: 16, title: "Nightfall", artist: "Khanm", image: "./SCA/nf.jpg", date: "May 27 2021", lnk:"https://distrokid.com/hyperfollow/khanm/nightfall" }
];

const albums = [
    { id: 1, title: "Smile Lines", artist: "Khanm", image: "./SCA/slalbum.jpg", date: "Feb 29 2024", lnk:"https://distrokid.com/hyperfollow/khanm/smile-lines" }
];

const appearOn = [
  { id: 4, title: "Sunset", artist: "Balochiswagg, Khanm", image: "./SCA/sunset.jpg", date: "Dec 18 2024", lnk:"https://distrokid.com/hyperfollow/balochiswagg/sunset-feat-khanm" },
  { id: 3, title: "Without You", artist: "Balochiswagg, Khanm", image: "./SCA/wy.jpg", date: "Nov 23 2023", lnk:"https://distrokid.com/hyperfollow/khanm/" },
  { id: 2, title: "Worthless", artist: "Azan Ali, Khanm", image: "./SCA/worthless.jpg", date: "Jul 16 2023", lnk:"https://distrokid.com/hyperfollow/khanm/worthless-feat-azan-ali-2" },
  { id: 1, title: "Reasons", artist: "Balochiswagg, Khanm", image: "./SCA/r.jpg", date: "Feb 1 2023", lnk:"https://distrokid.com/hyperfollow/balochiswagg/reasons-feat-khanm " }
];

export default function Music() {

  const [visibleSingle, setVisibleSingle] = useState(6);
  const [selectedSong, setSelectedSong] = useState(null);
  const [expanded, setExpanded] = useState(false);
    
  const toggleSingle = () => {
    if (expanded) {
      setVisibleSingle(6);
    } else {
      setVisibleSingle(singles.length);
    }
    setExpanded(!expanded);
  };

  const openModal = (song) => {
    setSelectedSong(song);
  };

  const closeModal = () => {
    setSelectedSong(null);
  };

  return (
    <div className="MusicPage">
      <div className={`main-content ${selectedSong ? 'blurred' : ''}`}>
        <div className="discography">
          <h1 className="pageHeading">Discography</h1>
        </div>

        <div className="mp-content">
          <div className="k-section">
            <div className="inSection singles">
              <p className="pageHead" style={{color:'#4A3C4B', fontWeight:'500'}}>Singles</p>
              <div className="content">
                <div className="cards">
                  {singles.slice(0, visibleSingle).map((song) => (
                    <img key={song.id} src={song.image} alt={song.title} onClick={() => openModal(song)} />
                  ))}
                </div>
                    <button className="btn2" onClick={toggleSingle}>
                        {expanded ? "Show Less" : "Load More"}
                    </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mp-content">
          <div className="k-section">
            <div className="inSection albums">
              <p className="pageHead">Albums</p>
              <div className="content">
                <div className="cards">
                  {albums.slice(0, visibleSingle).map((song) => (
                    <img key={song.id} src={song.image} alt={song.title} onClick={() => openModal(song)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mp-content">
          <div className="k-section">
            <div className="inSection appearOn">
              <p className="pageHead">Appear On</p>
              <div className="content">
                <div className="cards">
                  {appearOn.slice(0, visibleSingle).map((song) => (
                    <img key={song.id} src={song.image} alt={song.title} onClick={() => openModal(song)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {selectedSong && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedSong.image} alt={selectedSong.title} />
            <div className="song-info">
              <div className="song-date"><p>{selectedSong.date}</p></div>
                <div className="song-det">
                  <h1>{selectedSong.title}</h1>
                  <p>{selectedSong.artist}</p>
                  <button className="btn" onClick={() => window.open(selectedSong.lnk, '_blank')}>Stream / Download</button>
                </div>
              <div className='music-share'>
                <p className="shareLabel">Share</p>
                <div className="share-icons">
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://distrokid.com/hyperfollow/khanm/main-kaun-hoon" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      <FaFacebook className="shareIcon icon" />
                  </a>

                  <a href="https://api.whatsapp.com/send?text=Check%20this%20out!%20https://distrokid.com/hyperfollow/khanm/main-kaun-hoon" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      <FaWhatsapp className="shareIcon icon" />
                  </a>

                  <a href="https://twitter.com/intent/tweet?url=https://distrokid.com/hyperfollow/khanm/main-kaun-hoon&text=Check%20this%20out!" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      <FaTwitter className="shareIcon icon" />
                  </a>

                  <a href="#" 
                      onClick={(e) => {
                          e.preventDefault();
                          navigator.clipboard.writeText("https://distrokid.com/hyperfollow/khanm/main-kaun-hoon");
                          alert("Link copied to clipboard!");
                      }}>
                      <FaLink className="shareIcon icon" />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
