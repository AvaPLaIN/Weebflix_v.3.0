// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES
import React from "react";

//     * STYLE-COMPONENTS
import { HighlightItemContainer } from "./HighlightItem.styles";

//     * COMPONENTS
import Image from "../../../../../../components/widgets/Image/";

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

// !--- COMPONENT ---!
const HighlightItem = ({ anime, opacity }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  // !--- RENDER ---!
  return (
    <HighlightItemContainer opacity={opacity}>
      <Image
        src={`/api/imageProxy?url=${encodeURIComponent(anime.banner)}`}
        alt="highlight anime image"
        priority
        quality={80}
        className="hightlight-slider-image"
      />
      <div className="highlight-anime-details-container">
        <p className="genres">
          {anime?.genres?.slice(-3).map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </p>
        <h1 className="title">
          <span className="title-group">{anime.groupName}</span>
          <br />
          {anime?.titleEng?.replace(anime.groupName, "")}
        </h1>
        <p className="description">{anime?.description}</p>
        <div className="control-buttons">
          <button>Play</button>
          <button>Read More</button>
        </div>
      </div>
    </HighlightItemContainer>
  );
};

export default HighlightItem;