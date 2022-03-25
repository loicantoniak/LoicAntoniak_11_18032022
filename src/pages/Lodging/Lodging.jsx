import React, { useEffect, useState } from "react";
import "./Lodging.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../lib/hooks/useFetch";
// Components
import Tag from "../../components/Tag/Tag";
import HostProfile from "../../components/HostProfile/HostProfile";
import RatingStars from "../../components/RatingStars/RatingStars";
import Carousel from "../../components/Carousel/Carousel";
import Accordion from "../../components/Accordion/Accordion";
import Spinner from "../../components/Spinner/Spinner";

export default function Lodging() {
  const { lodgingId } = useParams();
  const navigate = useNavigate();
  const { data, error, loading } = useFetch("http://localhost:3000/data.json");
  const [lodging, setLodging] = useState();

  useEffect(() => {
    if (data.length > 0) {
      const newLodging = data.find((lodging) => lodging.id === lodgingId);
      if (!newLodging) return navigate("/noMatch");
      setLodging(newLodging);
    }
  }, [lodgingId, data, navigate]);

  if (error) return <span>Oups ! Une erreur est survenue...</span>;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        lodging && (
          <div className="lodging_container">
            <div className="lodging_carousel">
              <Carousel pictures={lodging.pictures} />
            </div>
            <div className="lodging_information">
              <div className="lodging_recap">
                <h1>{lodging.title}</h1>
                <h2>{lodging.location}</h2>
                <div className="lodging_tags">
                  {lodging.tags.map((tag, i) => (
                    <Tag key={`lodging_tag-${i}`} title={tag} />
                  ))}
                </div>
              </div>
              <div className="lodging_profile">
                <RatingStars rate={parseInt(lodging.rating)} />
                <HostProfile
                  name={lodging.host.name}
                  picture={lodging.host.picture}
                />
              </div>
            </div>

            <div className="lodging_description">
              <Accordion title="Description">
                Vous serez à 50m du canal Saint-martin où vous pourrez
                pique-niquer l'été et à côté de nombreux bars et restaurants. Au
                cœur de Paris avec 5 lignes de métro et de nombreux bus.
                Logement parfait pour les voyageurs en solo et les voyageurs
                d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes
                à pied).{" "}
              </Accordion>
              <Accordion title="Équipements">
                <ul className="lodging_equipmentsList">
                  {lodging.equipments.map((equipment, i) => (
                    <li key={i}>{equipment}</li>
                  ))}
                </ul>
              </Accordion>
            </div>
          </div>
        )
      )}
    </>
  );
}
