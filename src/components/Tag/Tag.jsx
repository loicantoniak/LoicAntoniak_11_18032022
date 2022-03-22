import React from "react";
import "./Tag.scss";

export default function Tag({ title }) {
  return (
    <div className="tag_container">
      <span>{title}</span>
    </div>
  );
}
