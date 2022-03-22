import React from "react";
import PropTypes from "prop-types";
import "./Tag.scss";

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function Tag({ title }) {
  return <div className="tag_container">{title}</div>;
}
