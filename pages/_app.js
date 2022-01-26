//! --- IMPORTS ---
//     * NEXT-JS-MODULES

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS
import Navbar from '../components/layout/navbar/Navbar';
import Footer from '../components/layout/footer/Footer';

//     * STATE-MANAGEMENT (REDUX)

//     * SERVICES (API)

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS
import '../styles/globals.css';

//     * LIBRARIES

//! --- COMPONENT ---
function MyApp({ Component, pageProps }) {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
