// !--- IMPORTS ---!
//     * NEXT-JS MODULES
import Link from "next/link";

//     * REACT-JS MODULES
import React, { memo } from "react";

//     * STYLE-COMPONENTS
import { HighlightItemContainer } from "./HighlightItem.styles";

//     * COMPONENTS
import Image from "../../../../../widgets/Image";

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

// !--- COMPONENT ---!
// eslint-disable-next-line react/display-name
const HighlightItem = memo(({ anime }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  // !--- RENDER ---!
  return (
    <HighlightItemContainer>
      <Image
        src={`/api/imageProxy?url=${encodeURIComponent(anime.banner)}`}
        alt={`${anime.titleEng} banner`}
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
          <button>
            <Link href={{ pathname: `/anime/${anime._id}` }}>
              <a className="link">Play</a>
            </Link>
          </button>
          <button>
            <Link href={{ pathname: `/anime/${anime._id}` }}>
              <a className="link">Read More</a>
            </Link>
          </button>
        </div>
      </div>
    </HighlightItemContainer>
  );
});

export default HighlightItem;
