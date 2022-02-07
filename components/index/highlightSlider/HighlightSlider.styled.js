import styled from "styled-components";

export const HighlightSliderContainer = styled.div`
  height: 80vh;
  position: relative;

  .keen-slider {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .highlight-slide-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    .hightlight-slider-image {
      background-color: transparent;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: -1;
    }
  }

  .progress-bar-container {
    z-index: 999;
    position: absolute;
    height: 1px;
    width: 100%;
    left: -100%;
    bottom: 0;
    background-color: var(--color-dark-4);
    ${(props) =>
      !props.mouseOver &&
      props.triggerNewProgressBarAnimation &&
      `animation: loadSliderProgress ${
        props.time / 1000
      }s infinite ease-in-out;`}
  }
`;
