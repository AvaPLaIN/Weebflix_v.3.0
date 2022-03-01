import PropTypes from "prop-types";
import NavLink from "./NavLink";

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
  href: "./",
};

export default NavLink;
