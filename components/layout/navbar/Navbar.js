//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import Link from "next/link";

//     * REACT-JS-MODULES
import { useEffect, useState } from "react";

//     * PAGES

//     * COMPONENTS
import {
  ControlsContainer,
  NavbarContainer,
  NavigationContainer,
} from "./Navbar.styles";
import Search from "./search/Search";
import NavLink from "../../widgets/NavLink/";

//     * STATE-MANAGEMENT (REDUX)

//     * SERVICES (API)

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS

//     * LIBRARIES

//     * ICONS
import { FaRegBookmark } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import Image from "../../widgets/Image";

//! --- COMPONENT ---
const Navbar = () => {
  //     * INIT

  //     * STATES
  const [windowIsScrolled, setWindowIsScrolled] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [searchInputIsOpen, setSearchInputIsOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  //     * HOOKS
  useEffect(() => {
    window.onscroll = () => {
      setWindowIsScrolled(window.pageYOffset ? true : false);
      return () => (window.onscroll = null);
    };
  }, []);

  useEffect(() => {
    if (searchInputIsOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [searchInputIsOpen]);

  //     * HANDLERS
  const handleCloseSearchSection = () => setSearchInputIsOpen(false);

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <NavbarContainer>
      <div className="logo-container">
        <Link href="/">
          <a>Weebflix</a>
        </Link>
      </div>
      <div className="control-container">
        <div className="search-container">
          <BiSearch />
        </div>
        <div className="list-container">
          <FaRegBookmark />
        </div>
        <div className="profile-container">
          <div className="profile">
            <Image
              src={`/api/imageProxy?url=${encodeURIComponent(
                "https://static.crunchyroll.com/assets/avatar/170x170/0001-cr-white-orange.png"
              )}`}
              alt="Avatar"
              className="avatar-image"
            />
          </div>
          <div className="dropdown">
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
