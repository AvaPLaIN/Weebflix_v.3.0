import PropTypes from "prop-types";
import Header from "./Header";

Header.propTypes = {
  banner: PropTypes.string,
  thumnail: PropTypes.string,
  titleEng: PropTypes.string,
  titleJap: PropTypes.string,
  genres: PropTypes.array,
  released: PropTypes.string,
  type: PropTypes.string,
  groupNameName: PropTypes.string,
};

Header.defaultProps = {};

export default Header;
