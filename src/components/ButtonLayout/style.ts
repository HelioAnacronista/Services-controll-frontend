import styled from "styled-components";

const media = {
  mobile: `@media(min-width: 300px) and (max-width:764px)`,
  tablet: `@media(min-width: 768px) and (max-width: 1024px)`,
  desktop: `@media(min-width: 1280px)`,
};

export const ButtonStyleLayout = styled.button`
  background-color: var(--green);
  color: var(--white);

  text-align: center;
  width: 200px;
  padding: 1px;
  margin: 40px 0;

  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;


  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #5bf1bf (164, 79%, 37%, 0.596);
  letter-spacing: 0.05em;
  border-radius: 20em;

  :hover {
    box-shadow: 0 0.5em 1.5em -0.5em #5bf1bf;
  }

  :active {
    box-shadow: 0 0.3em 1em -0.5em #5bf1bf;
  }

  ${media.mobile} {
    text-align: center;
    display: block;
    margin: 0 auto;
    width: 55%;
    padding: none;
     {
      text-align: center;
      width: 200px;
      padding: 1px;
      margin: 40px 0;
    }
  }
`;
