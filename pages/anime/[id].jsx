// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES

//     * STYLE-COMPONENTS

//     * COMPONENTS
import Header from "../../components/layout/Header";

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * MONGODB
import dbConnect from "../../config/mongoDB";
import Anime from "../../models/Anime";

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

//! --- COMPONENT ---
const AnimeId = ({ anime }) => {
  //     * INIT
  anime = JSON.parse(anime);

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <div>
      <Header title="Homepage" />
      <h1>Anime: {anime?.titleEng}</h1>
    </div>
  );
};

//! --- GET_SERVER_SIDE_PATHS ---
export async function getStaticPaths() {
  await dbConnect();
  const animes = await Anime.find();

  const paths = animes.map((anime) => ({
    params: {
      id: anime._id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

//! --- GET_SERVER_SIDE_PROPS ---
export async function getStaticProps({ params }) {
  await dbConnect();
  // console.log("new anime");
  const anime = await Anime.findOne({ _id: params.id });

  return {
    props: { anime: JSON.stringify(anime) },
    revalidate: 100,
  };
}

export default AnimeId;
