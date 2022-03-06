import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  gap: 2rem;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    width: 95%;
  }

  .controls {
    display: flex;
    gap: 1rem;

    @media (max-width: 1000px) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    @media (max-width: 600px) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
`;
