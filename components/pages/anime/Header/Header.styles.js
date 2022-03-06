import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: max-content;

  .banner-container {
    position: relative;
    width: 100%;
    height: 35vh;

    @media (max-width: 1000px) {
      height: 25vh;
    }

    @media (max-width: 600px) {
      height: 20vh;
    }
  }

  .header-info-container {
    width: 80%;
    margin: auto;
    display: flex;
    gap: 2rem;
    padding: 2rem 0;
    height: max-content;

    @media (max-width: 1000px) {
      width: 90%;
    }

    @media (max-width: 600px) {
      width: 95%;
      flex-direction: column;
      align-items: center;
    }

    .thumnail-container {
      position: relative;
      margin-top: -16rem;
      border: 4px solid var(--color-dark);
      min-width: 242px;
      max-width: 242px;
      min-height: 328px;
      max-height: 328px;
      overflow: hidden;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;

      @media (max-width: 1000px) {
        min-width: 219px;
        max-width: 219px;
        min-height: 300px;
        max-height: 300px;
      }

      @media (max-width: 600px) {
        min-width: 204px;
        max-width: 204px;
        min-height: 280px;
        max-height: 280px;
      }

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
        width: 95%;
        white-space: wrap;

        @media (max-width: 1000px) {
          font-size: 2.2rem;
        }

        @media (max-width: 600px) {
          font-size: 2rem;
        }

        .title-group {
          color: var(--color-orange);
          white-space: nowrap;

          @media (max-width: 600px) {
            width: 100%;
            text-align: center;
          }
        }

        .title-detail {
          @media (max-width: 600px) {
            width: 100%;
            text-align: center;
          }
        }
      }

      .genres {
        width: max-content;
        max-width: 100%;
        border-radius: 0.7rem;
        margin-top: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 1.5rem;
        color: var(--color-dark);
        font-size: 1.2rem;
        font-weight: 800;
        background-color: var(--color-orange);
        padding: 0.5rem 1rem;

        @media (max-width: 1000px) {
          max-width: 95%;
          font-size: 1rem;
        }

        @media (max-width: 600px) {
          font-size: 0.9rem;
        }

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
