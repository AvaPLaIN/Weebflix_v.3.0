import styled from "styled-components";

export const AiringFeedContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 0 2rem;
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .line {
    width: 100%;
    height: 3px;
    background-color: var(--color-orange);
  }

  .header {
    color: var(--color-white);
  }
`;
