import React from "react";
import "./Lodging.scss";
import { useParams } from "react-router-dom";
import { annoucements } from "../../services/announcement";
// Components
import Tag from "../../components/Tag/Tag";
import HostProfile from "../../components/HostProfile/HostProfile";
import RatingStars from "../../components/RatingStars/RatingStars";
import Carousel from "../../components/Carousel/Carousel";
import Accordion from "../../components/Accordion/Accordion";

export default function Lodging() {
  const { lodgingId } = useParams();

  const lodging = annoucements.find((lodging) => lodging.id === lodgingId);
  const { title, location, tags, host, rating, pictures, equipments } = lodging;

  return (
    <div className="lodging_container">
      <div className="lodging_carousel">
        <Carousel pictures={pictures} />
      </div>
      <div className="lodging_information">
        <div className="lodging_recap">
          <h1>{title}</h1>
          <h2>{location}</h2>
          <div className="lodging_tags">
            {tags.map((tag, i) => (
              <Tag key={`lodging_tag-${i}`} title={tag} />
            ))}
          </div>
        </div>
        <div className="lodging_profile">
          <RatingStars rate={parseInt(rating)} />
          <HostProfile name={host.name} picture={host.picture} />
        </div>
      </div>

      <div className="lodging_description">
        <Accordion title="Description">
          Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
          l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec
          5 lignes de métro et de nombreux bus. Logement parfait pour les
          voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de
          la gare de l'est (7 minutes à pied).{" "}
        </Accordion>
        <Accordion title="Équipements">
          <ul className="lodging_equipmentsList">
            {equipments.map((equipment) => (
              <li>{equipment}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </div>
  );
}
