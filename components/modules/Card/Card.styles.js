import styled from "styled-components";

export const CardContainer = styled.div`
  height: max-content;
  display: flex;
  padding: 0.5rem;
  padding-bottom: 1rem;
  cursor: pointer;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  overflow: hidden;

  .link {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .airing-slider-image {
      min-height: 250px;
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    .title {
      color: var(--color-grey);
      font-size: 1.3rem;
      font-weight: 700;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);

    .title {
      color: var(--color-white);
    }
  }
`;
