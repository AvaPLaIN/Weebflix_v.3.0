// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES

//     * STYLE-COMPONENTS

//     * COMPONENTS
import Home from "./home/";

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

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <>
      <Home airingAnimes={airingAnimes} />
    </>
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
