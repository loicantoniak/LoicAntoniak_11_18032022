import React, { createRef, useEffect, useState } from "react";
import "./Carousel.scss";
import PropTypes from "prop-types";
// Icons
import { ReactComponent as ArrowLeft } from ".././../assets/icons/arrow_left.svg";
import { ReactComponent as ArrowRight } from ".././../assets/icons/arrow_right.svg";

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Carousel({ pictures }) {
  const carouselRef = createRef(null);
  const [position, setPosition] = useState(1);
  const [width, setWidth] = useState(0);
  const [transitionTime, setTransitionTime] = useState(0);

  function handleResize() {
    setTransitionTime(0);
    setWidth(carouselRef.current.clientWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  const handleClickPrevious = () => {
    setTransitionTime(0.8);
    position === 1 ? setPosition(pictures.length) : setPosition(position - 1);
  };

  const handleClickNext = () => {
    setTransitionTime(0.8);
    position === pictures.length ? setPosition(1) : setPosition(position + 1);
  };

  return (
    <div className="carousel_container" ref={carouselRef}>
      <ArrowLeft
        className="carousel_arrowLeft"
        onClick={() => handleClickPrevious()}
      />

      {pictures.map((picture, i) => (
        <img
          key={`picture-${i + 1}`}
          src={picture}
          alt="accomodations"
          style={{
            left: `${width * (i - (position - 1))}px`,
            transition: `left ${transitionTime}s ease-in-out`,
          }}
        />
      ))}

      <span className="carousel_counter">
        {position}/{pictures.length}
      </span>

      <ArrowRight
        className="carousel_arrowRight"
        onClick={() => handleClickNext()}
      />
    </div>
  );
}
