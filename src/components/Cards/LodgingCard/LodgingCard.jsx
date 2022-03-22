import React from "react";
import PropTypes from "prop-types";
import "./LodgingCard.scss";

LodgingCard.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
};

LodgingCard.defaultProps = {
  cover: "",
  title: "",
};

export default function LodgingCard({ cover, title }) {
  return (
    <div className="lodgingCard_container">
      <img src={cover} alt={`logement dont le titre est ${title}`} />
      <p>{title}</p>
    </div>
  );
}
