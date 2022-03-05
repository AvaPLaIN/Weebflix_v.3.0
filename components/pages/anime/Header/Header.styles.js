import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: max-content;

  .banner-container {
    position: relative;
    width: 100%;
    height: 35vh;
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
      margin-top: -16rem;
      border: 4px solid var(--color-dark);
      height: clamp(350px, 350px, 400px);
      width: clamp(250px, 250px, 300px);
      min-width: 250px;
      overflow: hidden;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;

      .type {
        position: absolute;
        z-index: 999;
        bottom: 0;
        height: max-content;
        width: max-content;
        padding: 0.8rem;
        background-color: var(--color-orange);
        color: var(--color-dark);
        border-top-right-radius: 1.5rem;
        font-size: 1.2rem;
        font-weight: 900;
      }

      .status {
        position: absolute;
        z-index: 999;
        bottom: 0;
        right: 0;
        height: max-content;
        width: max-content;
        padding: 0.8rem;
        background-color: var(--color-dark);
        color: var(--color-white);
        border-top-left-radius: 1.5rem;
        font-size: 1.2rem;
        font-weight: 900;
      }
    }

    .info-container {
      display: flex;
      flex-direction: column;
      width: 100%;

      .title {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        color: var(--color-white);
        font-size: 2.4rem;
        width: 100%;
        white-space: nowrap;

        .title-group {
          color: var(--color-orange);
        }
      }

      .genres {
        width: max-content;
        border-radius: 0.7rem;
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: var(--color-dark);
        font-size: 1.2rem;
        font-weight: 800;
        background-color: var(--color-orange);
        padding: 0.5rem 1rem;

        span {
          white-space: nowrap;
        }
      }

      .info {
        margin-top: 1.5rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        color: var(--color-grey);
      }
    }
  }
`;
