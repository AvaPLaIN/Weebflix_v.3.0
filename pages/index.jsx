// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES
import { useState } from "react";

//     * STYLE-COMPONENTS
import { FeedContainer } from "../styles/Home.styles";

//     * COMPONENTS
import Header from "../components/layout/Header";
import HighlightSlider from "../components/pages/index/HighlightSlider/";
import Feed from "../components/pages/index/Feed/";

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)
import { getAnimePageList } from "../apollo/anime/queries";
import {
  airingAnimeConfig,
  shounenAnimeConfig,
  movieAnimeConfig,
} from "../apollo/queryConfig";

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

//! --- COMPONENT ---
const Index = ({ airingAnimes, shounenAnimes, movieAnimes }) => {
  //     * INIT

  //     * STATES
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState(airingAnimes);

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS
  const handleFetchMoreAnimesOnPagination = async () => {
    const animeFetchConfig = {
      page,
      status: "ongoing",
    };
    const animeFetchQuerySelectors = `
      _id
      genres
      titleEng
      description
      banner
    `;
    const { data } = await getAnimePageList(
      animeFetchConfig,
      animeFetchQuerySelectors
    );
    setAnimeList([...animeList, ...data.animes]);
    setPage((prev) => prev + 1);
  };

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <div>
      <Header title="Homepage" />
      <HighlightSlider highlightAnimes={airingAnimes} />
      <Feed title="Simulcast Season" animes={airingAnimes} />
      <Feed title="Movies" animes={movieAnimes} />
      <Feed title="Shounen" animes={shounenAnimes} />
    </div>
  );
};

// //! --- GET_SERVER_SIDE_PROPS ---
export async function getStaticProps() {
  const { data: airing } = await getAnimePageList(airingAnimeConfig);
  const { data: movie } = await getAnimePageList(movieAnimeConfig);
  const { data: shounen } = await getAnimePageList(shounenAnimeConfig);

  return {
    props: {
      airingAnimes: airing.animes,
      shounenAnimes: shounen.animes,
      movieAnimes: movie.animes,
    },
    revalidate: 120,
  };
}

export default Index;
