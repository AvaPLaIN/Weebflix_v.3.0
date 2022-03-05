import styled, { css } from "styled-components";

//* STYLED COMPONENTS
export const NavbarContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7rem;

  @media (max-width: 900px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }

  .logo-container {
    a {
      font-size: 2rem;
      color: var(--color-orange);
      font-weight: 900;
      letter-spacing: 0.6rem;
      padding: 1rem;
      transition: all 0.1s ease-in;

      @media (max-width: 600px) {
        font-size: 1.6rem;
        letter-spacing: 0.3rem;
      }
    }
  }

  .control-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;

    .profile-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      height: 100%;
      padding: 0 1.5rem;
      cursor: pointer;

      .profile {
        position: relative;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        overflow: hidden;
      }

      .dropdown {
        margin-top: 0.6rem;
        font-size: 2.5rem;
        color: var(--color-white);
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    .search-container,
    .list-container {
      min-width: 5rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-white);
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    .search-container {
      font-size: 2.5rem;
    }
  }
`;
