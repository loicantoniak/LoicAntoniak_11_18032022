import React from "react";
import "./Header.scss";
import logo from "../../assets/icons/logo.svg";
import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <div className="header_container">
      <img className="header_logo" src={logo} alt="logo de Kasa" />
      <Menu />
    </div>
  );
}
