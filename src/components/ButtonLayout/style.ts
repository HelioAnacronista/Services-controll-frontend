import styled from "styled-components";

import { mediaquery } from "../../utils/mediaquery";

const media = mediaquery;

export const ButtonStyleLayout = styled.button`
  background-color: var(--green);
  color: var(--white);

  text-align: center;
  width: 200px;
  padding: 1px;

  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;

  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
