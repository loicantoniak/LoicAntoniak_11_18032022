import React from "react";
import { Link } from "react-router-dom";
import "./Nomatch.scss"

export default function NoMatch() {
  return (
    <div className="noMatch_container">
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas.</h2>
      <Link to={"/"}>Retourner sur la page d’accueil</Link>
    </div>
  );
}
