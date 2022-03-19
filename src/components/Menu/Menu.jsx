import React from "react";
import "./Menu.scss";
import CustomLink from "./CustomLink/CustomLink";

const MAPPING_LINK = [
  { path: "/", name: "Accueil" },
  { path: "/about", name: "A propos" },
];

export default function Menu() {
  return (
    <nav className="menu_container">
      {MAPPING_LINK.map((link, i) => (
        <CustomLink key={i} to={link.path}>
          {link.name}
        </CustomLink>
      ))}
    </nav>
  );
}
