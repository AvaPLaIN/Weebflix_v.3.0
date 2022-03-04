import PropTypes from "prop-types";
import Feed from "./Feed";

Feed.propTypes = {
  title: PropTypes.string,
  animes: PropTypes.array,
};

Feed.defaultProps = {
  animes: [],
};

export default Feed;
