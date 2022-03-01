// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES
import Image from "next/image";

//     * STYLE-COMPONENTS

//     * COMPONENTS

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

//! --- COMPONENT ---
const Img = ({ src, alt, dataTestId, ...props }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return <Image src={src} alt={alt} {...props} data-testid={dataTestId} />;
};

export default Img;
