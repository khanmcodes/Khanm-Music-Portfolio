import React from "react";

export default function FeaturedCard({ cover, title, artist, lnk }) {
  return (
    <div className="featuredCard">
      <div className="f-cover">
        <img
          src={cover}
          style={{ width: "250px", borderRadius: "10px", marginBottom: "10px" }}
        />
      </div>
      <div className="f-songDetails">
        <h2 style={{ marginBottom: "5px" }}>{title}</h2>
        <p style={{ opacity: "80%", fontWeight: "100" }}>{artist}</p>
      </div>
      <button className="f-btn" onClick={() => window.open(lnk, "_blank")}>
        View Song
      </button>
    </div>
  );
}
