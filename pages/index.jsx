// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES
import { useState } from "react";

//     * STYLE-COMPONENTS

//     * COMPONENTS
import Header from "../components/layout/Header";
import HighlightSlider from "../components/pages/index/HighlightSlider/";

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)
import { getAnimePageList } from "../apollo/anime/queries";

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

//! --- COMPONENT ---
const Index = ({ airingAnimes }) => {
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
    </div>
  );
};

// //! --- GET_SERVER_SIDE_PROPS ---
export async function getStaticProps() {
  const animeFetchConfig = {
    page: 0,
    status: "ongoing",
  };
  const animeFetchQuerySelectors = `
    _id
    genres
    titleEng
    groupName
    description
    banner
  `;
  const { data } = await getAnimePageList(
    animeFetchConfig,
    animeFetchQuerySelectors
  );

  return {
    props: {
      airingAnimes: data.animes,
    },
  };
}

export default Index;
