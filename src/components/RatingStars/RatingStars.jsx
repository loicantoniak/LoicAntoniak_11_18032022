import React from "react";
import "./RatingStars.scss";
import Star from "./Star/Star";

const getStarsColor = (total, rate) => {
  let number = rate;
  let colors = [];
  for (let i = 0; i < total; i++) {
    number > 0 ? colors.push("#FF6060") : colors.push("#E3E3E3");
    number--;
  }

  return colors;
};

export default function RatingStars({ maxGrade = 5, rate }) {
  const starColors = getStarsColor(maxGrade, rate);

  return (
    <div className="ratingStars_container">
      {starColors.map((color, i) => (
        <Star key={`star-${i}`} color={color} />
      ))}
    </div>
  );
}
