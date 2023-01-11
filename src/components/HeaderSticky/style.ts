import styled from 'styled-components'

const media = {
  mobile: `@media(min-width: 300px) and (max-width:764px)`,
  tablet: `@media(min-width: 768px) and (max-width: 1024px)`,
  desktop: `@media(min-width: 1280px)`,
};

export const Header = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 0.5rem;
  box-shadow: 0px 10px 6rem #bebebe, -15px -15px 30px #ffffff;
  transition: all 10ms ease;

  ${media.mobile} {
    width: 100%;
  }
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-menu-style {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: white;
    background: #7380ec;
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em #8d98fc(164, 79%, 37%, 0.596);
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
    text-align: center;
    display: block;
    margin: 0 auto;
    width: 55%;

    .btn-menu-style {
      text-align: center;
      width: 100%;
      padding: 10px;
    }
  }
`
