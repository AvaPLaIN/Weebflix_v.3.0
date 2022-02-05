//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import Image from "next/image";

//     * REACT-JS-MODULES
import { useState } from "react";

//     * PAGES

//     * COMPONENTS
import { HighlightSliderContainer } from "./HighlightSlider.styled";

//     * STATE-MANAGEMENT (REDUX)

//     * APOLLO

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS

//     * LIBRARIES
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//     * STATIC-CONFIG

//! --- COMPONENT ---
const HighlightSlider = ({ highlightAnimes }) => {
  //     * INIT
  const styles = ["bg-primary", "bg-blue"];
  const newImageSrc = highlightAnimes[0].banner.toString().replace(/[()]/g, "");
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

  //     * STATES
  const [opacities, setOpacities] = useState([]);

  //     * HOOKS
  const [sliderRef] = useKeenSlider(
    {
      slides: highlightAnimes.length,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
        setOpacities(new_opacities);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <HighlightSliderContainer>
      <div ref={sliderRef} className="keen-slider">
        {highlightAnimes.map((anime, index) => (
          <div
            key={index}
            className="highlight-slide-container"
            style={{ opacity: opacities[index] }}
          >
            <Image
              src={`/api/imageProxy?url=${encodeURIComponent(anime.banner)}`}
              alt="highlight image"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(700, 475)
              )}`}
              priority
              layout="fill"
              objectFit="cover"
              quality={60}
              className="hightlight-slider-image"
            />
            <h1>{anime.title}</h1>
          </div>
        ))}
      </div>
    </HighlightSliderContainer>
  );
};

export default HighlightSlider;
