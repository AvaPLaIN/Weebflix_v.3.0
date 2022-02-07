//! --- IMPORTS ---
//     * NEXT-JS-MODULES

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS
import Header from "../components/layout/Header";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

//     * STATE-MANAGEMENT (REDUX)

//     * SERVICES (API)

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS
import "../styles/globals.css";

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
      <Header title="Weebflix" />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
