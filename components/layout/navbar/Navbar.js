//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import Link from "next/link";

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS
import { NavbarContainer } from "./Navbar.styles";

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

  //     * HOOKS

  //     * HANDLERS

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
