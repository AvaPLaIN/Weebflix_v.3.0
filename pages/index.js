//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import Head from 'next/head';

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS
import Header from '../components/layout/Header';
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
      <Header title='Homepage' />
      <Slider />
    </div>
  );
};

export default Home;
