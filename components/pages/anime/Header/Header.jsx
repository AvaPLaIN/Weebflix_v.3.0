// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES

//     * STYLE-COMPONENTS
import { HeaderContainer } from "./Header.styles";

//     * COMPONENTS
import Image from "../../../widgets/Image/";

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

// !--- COMPONENT ---!
const Header = ({
  banner,
  thumnail,
  genres,
  titleEng,
  groupName,
  episodesCount,
  status,
  type,
  released,
  titleJap,
}) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  // !--- RENDER ---!
  return (
    <HeaderContainer>
      <div className="banner-container">
        <Image
          src={`/api/imageProxy?url=${encodeURIComponent(banner)}`}
          alt={`${titleEng} banner`}
          priority
          quality={80}
          className="hightlight-slider-image"
        />
      </div>
      <div className="header-info-container">
        <div className="thumnail-container">
          <Image
            src={`/api/imageProxy?url=${encodeURIComponent(thumnail)}`}
            alt={`${titleEng} thumnail`}
            priority
            quality={60}
            className="hightlight-slider-image"
          />
          <div className="type">{type}</div>
          <div className="status">{status}</div>
        </div>
        <div className="info-container">
          <h1 className="title">
            <span className="title-group">{groupName}</span>
            {titleEng?.replace(groupName, "")}
          </h1>
          <p className="genres">
            {genres?.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </p>
          <div className="info">
            <div className="titleJap">{titleJap}</div>
            <div className="released">Released: {released}</div>
            {type !== "movie" && (
              <p className="episodes-count">Episodes: {episodesCount}</p>
            )}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
