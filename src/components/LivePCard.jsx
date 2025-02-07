import React from "react";
import "../styles/styles.css";

export default function LivePCard(props) {
  const handleEnter = () => {
    document.getElementById("livePic").style.display = "flex";
  };

  const handleLeave = () => {
    document.getElementById("livePic").style.display = "none";
  };

  return (
    <div className="LivePCard">
      <button
        className="live-btn"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <h1>{props.place}</h1>
        <h3 style={{ marginLeft: "20px", opacity: "70%", marginTop: "10px" }}>
          {props.when}
        </h3>
        <img src={props.img} alt="" id="livePic" />
      </button>
    </div>
  );
}
