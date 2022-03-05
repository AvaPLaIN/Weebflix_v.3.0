import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 35vh;

  .banner-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .header-info-container {
    width: 80%;
    margin: auto;
    display: flex;
    gap: 2rem;
    padding: 2rem 0;
    height: max-content;

    .thumnail-container {
      position: relative;
      margin-top: -14rem;
      border: 3px solid rgb(var(--background-color-dark-1));
      height: clamp(350px, 350px, 400px);
      width: clamp(250px, 250px, 300px);
      min-width: 250px;
      overflow: hidden;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }
  }
`;
