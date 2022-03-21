import React from "react";
import "./Banner.scss";

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
