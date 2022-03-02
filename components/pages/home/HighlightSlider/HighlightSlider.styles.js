import styled from "styled-components";

export const HighlightSliderContainer = styled.div`
  height: 50vh;
  min-height: 300px;
  max-height: 500px;
  position: relative;

  .keen-slider {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .progress-bar-container {
    z-index: 2;
    position: absolute;
    height: 3px;
    width: 100%;
    left: -100%;
    top: 0;
    background-color: var(--color-orange);
    ${(props) =>
      !props.mouseOver &&
      props.triggerNewProgressBarAnimation &&
      `animation: loadSliderProgress ${
        props.time / 1000
      }s infinite ease-in-out;`}
  }
`;
