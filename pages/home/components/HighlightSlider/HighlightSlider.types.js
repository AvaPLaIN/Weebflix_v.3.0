import PropTypes from "prop-types";
import HighlightSlider from "./HighlightSlider";

HighlightSlider.propTypes = {
  dataTestId: PropTypes.oneOf(["highlightslider"]),
  highlightAnimes: PropTypes.array,
};

HighlightSlider.defaultProps = {
  highlightAnimes: [],
};

export default HighlightSlider;
