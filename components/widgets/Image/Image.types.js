import PropTypes from "prop-types";
import Image from "./Image";

//! Blur Data Url - Loading Blur Screen
const convertImage = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

Image.propTypes = {
  src: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(["intrinsic", "fixed", "responsive", "fill"]),
  priority: PropTypes.bool,
  objectFit: PropTypes.oneOf([
    "fill",
    "contain",
    "cover",
    "none",
    "scale-down",
  ]),
  quality: PropTypes.number,
  placeholder: PropTypes.oneOf(["blur", "none"]),
  blurDataUrl: PropTypes.any,
  dataTestId: PropTypes.oneOf(["image"]),
};

Image.defaultProps = {
  priority: false,
  objectFit: "cover",
  quality: 60,
  placeholder: "blur",
  layout: "fill",
  blurDataURL: `data:image/svg+xml;base64,${toBase64(convertImage(700, 475))}`,
};

export default Image;
