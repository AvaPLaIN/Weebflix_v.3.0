import styled from "styled-components";

export const EpisodesContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  height: max-content;

  #episodes-scroll-container {
    width: 100%;
    height: max-content;
    max-height: 30rem;
    overflow-y: scroll;

    .episode {
      width: 100%;
      padding: 1rem 2rem;
      border-bottom: 2px solid var(--color-dark);
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      p {
        color: var(--color-grey);
        font-size: 1.6rem;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
