import styled from "styled-components";

export const HighlightSliderContainer = styled.div`
  height: 80vh;

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
`;
