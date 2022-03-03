import styled from "styled-components";

export const HighlightItemContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .hightlight-slider-image {
    background-color: transparent;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  .highlight-anime-details-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-left: 5rem;
    max-width: 40%;
    position: relative;
    padding: 4rem 2rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      filter: blur(25px);
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .genres {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background-color: var(--color-dark);
      padding: 0.5rem 1rem;
      color: var(--color-white);
      font-size: 1.1rem;
      border-radius: 0.5rem;
      font-weight: 800;
    }

    .title {
      color: var(--color-white);

      .title-group {
        color: var(--color-orange);
      }
      font-size: 3rem;
    }

    .description {
      color: var(--color-white);
      font-size: 1.4rem;
      font-weight: 700;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    .control-buttons {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;

      button {
        padding: 1rem 1.5rem;
        background-color: var(--color-dark);
        border: none;
        color: var(--color-white);
        font-weight: 800;
        cursor: pointer;
        transition: all 0.2s ease-in;

        &:nth-child(2) {
          background-color: var(--color-orange);
          color: var(--color-dark);
        }

        &:hover {
          background-color: var(--color-orange);
          color: var(--color-dark);
          transform: scale(1.05);

          &:nth-child(2) {
            background-color: var(--color-dark);
            color: var(--color-white);
          }
        }
      }
    }
  }
`;
