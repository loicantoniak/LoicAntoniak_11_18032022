import React from "react";
import "./LodgingCard.scss";

export default function LodgingCard({ cover, title }) {
  return (
    <div className="lodgingCard_container">
      <img src={cover} alt={`logement dont le titre est ${title}`} />
      <p>{title}</p>
    </div>
  );
}
