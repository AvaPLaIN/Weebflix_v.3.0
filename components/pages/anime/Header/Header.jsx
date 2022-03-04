// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES

//     * STYLE-COMPONENTS
import { HeaderContainer } from "./Header.styles";

//     * COMPONENTS
import Image from "../../../widgets/Image/";

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * NPM-PACKAGES

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

// !--- COMPONENT ---!
const Header = ({ banner, thumnail, titleEng }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  // !--- RENDER ---!
  return (
    <HeaderContainer>
      <div className="banner-container">
        <Image
          src={`/api/imageProxy?url=${encodeURIComponent(banner)}`}
          alt={`${titleEng} banner`}
          priority
          quality={80}
          className="hightlight-slider-image"
        />
      </div>
      <div className="header-info-container">
        <div className="thumnail-container">
          <Image
            src={`/api/imageProxy?url=${encodeURIComponent(thumnail)}`}
            alt={`${titleEng} thumnail`}
            priority
            quality={60}
            className="hightlight-slider-image"
          />
        </div>
        <div className="info-container">
          <h1 className="title">{titleEng}</h1>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
