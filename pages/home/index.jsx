//! --- IMPORTS ---
//     * NEXT-JS-MODULES

//     * REACT-JS-MODULES
import { useState } from "react";

//     * PAGES

//     * STYLE-COMPONENTS
// import { FeedContainer } from "../../styles/Home.styles";

//     * COMPONENTS
import Header from "../../components/layout/Header";
import HighlightSlider from "../../components/pages/home/HighlightSlider/";
// import AiringFeed from "./components/AiringFeed/";
// import ListFeed from "./components/ListFeed/";

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
      {/* <FeedContainer>
        <AiringFeed />
        <ListFeed />
      </FeedContainer> */}
    </div>
  );
};

export default Home;
