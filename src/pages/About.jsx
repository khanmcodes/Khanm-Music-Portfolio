import { React, useState } from 'react'
import { FaApple, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from "react-icons/fa";

const images = [
    "/About Gallery/4.jpg",
    "/About Gallery/5.JPEG",
    "/About Gallery/3.jpg"
  ];

export default function About() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
    };


  return (
    <div className='aboutPage'>
        <div className="gallery">
            <div className="gallery-container">
                <div className="slider">
                    <div
                    className="image-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                    {images.map((img, index) => (
                        <img key={index} src={img} alt={`Slide ${index + 1}`} className="slide" />
                    ))}
                    </div>
                </div>
                <div className="slideButtons">
                    <button className="next" onClick={nextSlide}>&#10095;</button>
                    <button className="prev" onClick={prevSlide}>&#10094;</button>
                </div>
            </div>
            
            <div className="indicators">
                {images.map((_, index) => (
                <span
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                ></span>
                ))}
            </div>
        </div>

        <div className="aboutme">
            <h1>Khan Muhammad</h1>
            <p>20, professionally known as Khanm, hails from the quaint town of Sukkur, Pakistan. <br />
                Singer and songwriter, Khanm captivates a diverse audience with his melodious English and Urdu/Hindi songs. Embracing cultural roots and global influences, making him a truly versatile and captivating artist. <br /><br />
                Khanm released his debut single "Nightfall" in 2021. </p>
            
            <h2>About</h2>
            <p>Khan Muhammad</p>
            <p>29/11/2004</p>
            <p>Sukkur, Sindh, Pakistan</p>
        </div>

        <div className="about-boxes-container">
            <div className="marquee">
                <span>
                <div className="aboutBox">SINGER</div>
                <div className="aboutBox">SONGWRITER</div>
                <div className="aboutBox">GUITARIST</div>
                <div className="aboutBox">COMPOSER</div>
                <div className="aboutBox">ENGINEER</div>
                <div className="aboutBox">PRODUCER</div>
                <div className="aboutBox">SINGER</div>
                <div className="aboutBox">SONGWRITER</div>
                <div className="aboutBox">GUITARIST</div>
                <div className="aboutBox">COMPOSER</div>
                <div className="aboutBox">ENGINEER</div>
                <div className="aboutBox">PRODUCER</div>
                </span>
            </div>
            <div className="marquee marquee-reverse">
                <span>
                <div className="aboutBox">RNB</div>
                <div className="aboutBox">SOUL</div>
                <div className="aboutBox">INDIE</div>
                <div className="aboutBox">POP</div>
                <div className="aboutBox">SINGER-SONGWRITER</div>
                <div className="aboutBox">COUNTRY</div>
                <div className="aboutBox">RNB</div>
                <div className="aboutBox">SOUL</div>
                <div className="aboutBox">INDIE</div>
                <div className="aboutBox">POP</div>
                <div className="aboutBox">SINGER-SONGWRITER</div>
                <div className="aboutBox">COUNTRY</div>
                </span>
            </div>
            </div>

        <div className="aboutme">
            <h3>Follow</h3>
            <div className="follow-icons">
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
            </div>

            <h3>Contact</h3>
            <div className="contact-sec">
                <div className="form-container">
                    <form action='https://formspree.io/f/mgvozwkd' target='_blank' method="POST">
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        />
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        />
                        <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                        ></textarea>
                        <button className="form-btn" type="submit">Send Message</button>
                    </form>
                </div>
                <div className="mp">
                    <div className="mail-phone">
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
                </div>
            </div>
            

        </div>

        
    </div>
  )
}
