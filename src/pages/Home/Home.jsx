import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useFetch } from "../../lib/hooks/useFetch";
// Components
import Spinner from "../../components/Spinner/Spinner";
import Banner from "../../components/Banner/Banner";
import LodgingCard from "../../components/Cards/LodgingCard/LodgingCard";
import image from "../../assets/images/falaise.png";

export default function Home() {
  const { data, error, loading } = useFetch("http://localhost:3000/data.json");

  if (error) return <span>Oups ! Une erreur est survenue...</span>;

  return (
    <>
      <Banner image={image} title={"Chez vous, partout et ailleurs"} />

      <div className="lodgings_container">
        {loading ? (
          <Spinner />
        ) : (
          data.map((lodging) => (
            <Link key={lodging.id} to={`/logement/${lodging.id}`}>
              <LodgingCard
                key={lodging.id}
                cover={lodging.cover}
                title={lodging.title}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
}
