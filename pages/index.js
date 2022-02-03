//! --- IMPORTS ---
//     * NEXT-JS-MODULES

//     * REACT-JS-MODULES
import { useState } from "react";

//     * PAGES

//     * COMPONENTS
import Header from "../components/layout/Header";

//     * STATE-MANAGEMENT (REDUX)

//     * APOLLO
import { getAnimePageList } from "../apollo/anime/queries";

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS

//     * LIBRARIES

//! --- COMPONENT ---
const Home = ({ animes }) => {
  //     * INIT

  //     * STATES
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState(animes);

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS
  const handleFetchMoreAnimesOnPagination = async () => {
    const animeFetchConfig = {
      page,
      released: "2019",
    };
    const { data } = await getAnimePageList(animeFetchConfig);
    setAnimeList([...animeList, ...data.animes]);
    setPage((prev) => prev + 1);
  };

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <div>
      <Header title="Homepage" />
      {/* <Link href='/about'>About</Link> */}
      <button onClick={handleFetchMoreAnimesOnPagination}>More</button>
      <div className="animes">
        {animeList?.map((anime) => (
          <div key={anime._id}>
            <p>
              {anime?.title} - {anime?.released} - {anime?.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

//! --- GET_SERVER_SIDE_PROPS ---
export async function getStaticProps() {
  const animeFetchConfig = {
    page: 0,
    released: "2019",
  };
  const { data } = await getAnimePageList(animeFetchConfig);

  return {
    props: {
      animes: data.animes,
    },
  };
}

export default Home;
