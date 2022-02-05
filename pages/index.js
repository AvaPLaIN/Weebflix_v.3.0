//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import dynamic from "next/dynamic";
import Image from "next/image";

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
import demonSlayerBanner from "../public/assets/demon-slayer-banner.jpeg";
import onePunchMan from "../public/assets/onepunchman.jpeg";
import slime from "../public/assets/slime.jpeg";

//     * LIBRARIES
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//! --- COMPONENT ---
const Home = ({ animes }) => {
  //     * INIT

  //     * STATES
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState(animes);

  //     * HOOKS
  const [refCallback, slider, sliderNode] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

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
      <div ref={refCallback} className="keen-slider">
        <div className="keen-slider__slide">
          <Image
            src={demonSlayerBanner}
            alt="highlight image"
            placeholder="blur"
            priority
            height={400}
            layout="responsive"
            objectFit="cover"
            quality={50}
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src={onePunchMan}
            alt="highlight image"
            placeholder="blur"
            priority
            layout="fill"
            objectFit="cover"
            quality={50}
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src={slime}
            alt="highlight image"
            placeholder="blur"
            priority
            layout="fill"
            objectFit="cover"
            quality={50}
          />
        </div>
      </div>
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
