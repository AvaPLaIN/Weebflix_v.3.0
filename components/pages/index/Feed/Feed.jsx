// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES
import React from "react";

//     * STYLE-COMPONENTS
import { FeedContainer } from "./Feed.styles";

//     * COMPONENTS
import Card from "../../../modules/Card";

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * NPM-PACKAGES
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

// !--- COMPONENT ---!
const AiringFeed = ({ title, animes }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS
  const [sliderRef] = useKeenSlider({
    loop: true,
    // rtl: true,
    breakpoints: {
      "(min-width: 190px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 610px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 820px)": {
        slides: { perView: 4, spacing: 10 },
      },
      "(min-width: 1030px)": {
        slides: { perView: 5, spacing: 10 },
      },
      "(min-width: 1240px)": {
        slides: { perView: 6, spacing: 10 },
      },
      "(min-width: 1450px)": {
        slides: { perView: 7, spacing: 10 },
      },
      "(min-width: 1660px)": {
        slides: { perView: 8, spacing: 10 },
      },
      "(min-width: 1870px)": {
        slides: { perView: 9, spacing: 10 },
      },
      "(min-width: 2080px)": {
        slides: { perView: 10, spacing: 10 },
      },
      "(min-width: 2290px)": {
        slides: { perView: 11, spacing: 10 },
      },
    },
  });

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  // !--- RENDER ---!
  return (
    <FeedContainer>
      <h1 className="header">{title}</h1>
      <div className="line"></div>
      <div ref={sliderRef} className="keen-slider">
        {animes?.map((anime) => (
          <Card key={anime._id} anime={anime} />
        ))}
      </div>
    </FeedContainer>
  );
};

export default AiringFeed;
