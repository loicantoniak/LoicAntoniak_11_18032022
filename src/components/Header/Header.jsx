import React from "react";
import "./Header.scss";
import logo from "../../assets/icons/logo.svg";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header_container">
      <Link to={"/"}>
        <img className="header_logo" src={logo} alt="logo de Kasa" />
      </Link>
      <Menu />
    </div>
  );
}
