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
import { FaTimes, FaSearch, FaBars } from "react-icons/fa";
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
    <NavbarContainer windowIsScrolled={windowIsScrolled}>
      <NavigationContainer>
        <NavLink href="/" exact>
          Home
        </NavLink>
        <NavLink href="/mylist" exact>
          My List
        </NavLink>
      </NavigationContainer>
      <ControlsContainer
        searchInputIsOpen={searchInputIsOpen}
        navbarIsOpen={navbarIsOpen}
      >
        <div className="search-container">
          <label htmlFor="searchValueInput">
            <FaSearch
              onClick={() => setSearchInputIsOpen((prev) => !prev)}
              className="icon"
            />
          </label>
          <input
            type="text"
            placeholder="Search..."
            id="searchValueInput"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
          {searchInputIsOpen && (
            <FaTimes onClick={() => setSearchInputValue("")} className="icon" />
          )}
        </div>

        <div className="account-container">
          <div className="avatar">
            <Image
              src={`/api/imageProxy?url=${encodeURIComponent(
                "https://static.crunchyroll.com/assets/avatar/170x170/0001-cr-white-orange.png"
              )}`}
              alt="Avatar"
              className="avatar-image"
            />
          </div>
          <div className="account-settings">
            <p>AvaPLaIN</p>
            <p>Logout</p>
          </div>
        </div>
        <div className="responsive-menu">
          <FaBars
            onClick={() => setNavbarIsOpen((prev) => !prev)}
            className="icon"
          />
          <div className="menu-container">
            <Link href="/" onClick={() => setNavbarIsOpen((prev) => !prev)}>
              <a>Homepage</a>
            </Link>
            <Link
              href="/mylist"
              activeclassname="selected"
              onClick={() => setNavbarIsOpen((prev) => !prev)}
            >
              <a>My List</a>
            </Link>
            <p>Logout</p>
            <div
              className="close-menu"
              onClick={() => setNavbarIsOpen((prev) => !prev)}
            >
              <FaTimes />
            </div>
          </div>
        </div>
      </ControlsContainer>
      {searchInputIsOpen && (
        <Search
          searchValue={searchInputValue}
          handleCloseSearchSection={handleCloseSearchSection}
        />
      )}
    </NavbarContainer>
  );
};

export default Navbar;
