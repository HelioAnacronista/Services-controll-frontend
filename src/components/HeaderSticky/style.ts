import styled from "styled-components";

const media = {
  mobile: `@media(min-width: 300px) and (max-width:764px)`,
  tablet: `@media(min-width: 768px) and (max-width: 1024px)`,
  desktop: `@media(min-width: 1280px)`,
};

export const Profile = styled.div`
  margin: 0 0 0 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;

  ${media.mobile} {
    width: 100%;
  }
`;

export const ContentProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  ${media.mobile} {
    display: block;
    margin-left: 7.5rem;

    .btn-menu-style {
      width: 230px;
    }
  }
`;

export const SideBar = styled.nav`
  display: flex;
  align-items: center;

  .btn-menu-style {
    padding: 0.5rem 0;
    background-color: var(--blue);
    color: var(--white);
    text-align: center;
    width: 200px;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em #737fecb4 (164, 79%, 37%, 0.596);
    letter-spacing: 0.05em;
    border-radius: 20em;
  }
  .btn-menu-style svg {
    margin-right: 6px;
  }

  .btn-menu-style:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #737fecb4;
  }

  .btn-menu-style:active {
    box-shadow: 0 0.3em 1em -0.5em #737fecb3;
  }

  ${media.mobile} {
    display: block;
    margin-left: 7.5rem;

    .btn-menu-style {
      width: 230px;
    }
  }
`;
