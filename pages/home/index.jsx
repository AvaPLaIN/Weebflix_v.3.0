//! --- IMPORTS ---
//     * NEXT-JS-MODULES

//     * REACT-JS-MODULES
import { useState } from "react";

//     * PAGES

//     * COMPONENTS
import Header from "../../components/layout/Header";
import HighlightSlider from "./components/HighlightSlider/";

//     * STATE-MANAGEMENT (REDUX)

//     * APOLLO
import { getAnimePageList } from "../../apollo/anime/queries";

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS

//     * LIBRARIES

//     * STATIC-CONFIG

//! --- COMPONENT ---
const Home = ({ airingAnimes }) => {
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

export default Home;
