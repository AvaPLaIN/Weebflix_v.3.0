// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES

//     * STYLE-COMPONENTS
import { SeasonsContainer } from "./Seasons.styles";

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
const Seasons = ({ animes }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  // !--- RENDER ---!
  return (
    <SeasonsContainer>
      {animes.map((anime) => (
        <div className="group-item" key={anime._id} title={anime.titleEng}>
          <div className="thumnail-container">
            <Image
              src={`/api/imageProxy?url=${encodeURIComponent(anime.thumnail)}`}
              alt={`${anime.titleEng} thumnail`}
              priority
              quality={60}
              className="hightlight-slider-image"
            />
          </div>
          <div className="info">
            <p className="title">{anime.titleEng}</p>
            <p className="type">Type: {anime.type}</p>
            <p className="episodes-count">Episodes: {anime.episodesCount}</p>
            <p className="status">Status: {anime.status}</p>
            <p className="status">Released: {anime.released}</p>
          </div>
        </div>
      ))}
    </SeasonsContainer>
  );
};

export default Seasons;
