import React from "react";
import PropTypes from "prop-types";
import "./HostProfile.scss";

HostProfile.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

HostProfile.defaultProps = {
  picture: "",
};

export default function HostProfile({ name, picture }) {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="hostProfile_container">
      <p>
        {firstName}
        <br />
        {lastName}
      </p>

      <div className="hostProfile_image">
        <img src={picture} alt={`profil de ${name}`} />
      </div>
    </div>
  );
}
