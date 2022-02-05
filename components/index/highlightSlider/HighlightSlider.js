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
import demonSlayerBanner from "../../../public/assets/onepunchman.jpeg";

//     * LIBRARIES
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//     * STATIC-CONFIG

//! --- COMPONENT ---
const HighlightSlider = ({ highlightAnimes }) => {
  //     * INIT

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
              src={demonSlayerBanner}
              alt="highlight image"
              placeholder="blur"
              priority
              layout="fill"
              objectFit="cover"
              quality={50}
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
