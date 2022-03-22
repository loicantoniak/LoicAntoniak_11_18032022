import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

Banner.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string,
  variant: PropTypes.string,
};

Banner.defaultProps = {
  title: null,
  variant: null,
};

export default function Banner({ image, title, variant }) {
  return (
    <div
      className={`banner_container ${
        variant === "big" && "banner_container--big"
      }`}
    >
      <img src={image} alt="falaise" />
      {title && <p>{title}</p>}
    </div>
  );
}
