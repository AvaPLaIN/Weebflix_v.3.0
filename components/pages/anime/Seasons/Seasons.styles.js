import styled from "styled-components";

export const SeasonsContainer = styled.div`
  min-width: 242px;
  max-width: 242px;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 1000px) {
    min-width: 219px;
    max-width: 219px;
  }

  @media (max-width: 600px) {
    min-width: 204px;
    max-width: 204px;
  }

  .group-item {
    width: 100%;
    height: 10rem;
    display: flex;
    cursor: pointer;

    .thumnail-container {
      position: relative;
      height: 100%;
      min-width: 7.5rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      width: 100%;
      color: var(--color-grey);

      .title {
        color: var(--color-orange);
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 1rem;
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
