// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES

//     * STYLE-COMPONENTS
import { CardContainer } from "./Card.styles";

//     * COMPONENTS
import Image from "../../widgets/Image";

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

// !--- COMPONENT ---!
const Card = ({ anime }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  // !--- RENDER ---!
  return (
    <CardContainer className="keen-slider__slide">
      <div className="airing-slider-image">
        <Image
          src={`/api/imageProxy?url=${encodeURIComponent(anime?.thumnail)}`}
          alt="airing anime image"
          quality={60}
        />
      </div>
      <p className="title">{anime?.titleEng}</p>
    </CardContainer>
  );
};

export default Card;
