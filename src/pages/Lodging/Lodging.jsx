import React from "react";
import "./Lodging.scss";
import { useParams } from "react-router-dom";
import { annoucements } from "../../services/announcement";
import Tag from "../../components/Tag/Tag";
import HostProfile from "../../components/HostProfile/HostProfile";
import RatingStars from "../../components/RatingStars/RatingStars";

export default function Lodging() {
  const { lodgingId } = useParams();

  const lodging = annoucements.find((lodging) => lodging.id === lodgingId);
  const { title, location, tags, host, rating } = lodging;

  return (
    <div className="lodging_container">
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
    </div>
  );
}
