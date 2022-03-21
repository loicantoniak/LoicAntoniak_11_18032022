import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import LodgingCard from "../../components/Cards/LodgingCard/LodgingCard";
import { annoucements } from "../../services/announcement";
import image from "../../assets/images/falaise.png";

export default function Home() {
  return (
    <>
      <Banner image={image} title={"Chez vous, partout et ailleurs"} />

      <div className="lodgings_container">
        {annoucements.map((lodging) => (
          <Link key={lodging.id} to={`/logement/${lodging.id}`}>
            <LodgingCard
              key={lodging.id}
              cover={lodging.cover}
              title={lodging.title}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
