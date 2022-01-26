//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import Head from 'next/head';

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS
import Slider from '../components/slider/Slider';

//     * STATE-MANAGEMENT (REDUX)

//     * SERVICES (API)

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS

//     * LIBRARIES

//! --- COMPONENT ---
const Home = () => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Slider />
    </div>
  );
};

export default Home;
