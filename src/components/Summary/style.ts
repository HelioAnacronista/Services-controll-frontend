import styled from "styled-components";

const media = {
  mobile: `@media(min-width: 300px) and (max-width:764px)`,
  tablet: `@media(min-width: 768px) and (max-width: 1024px)`,
  desktop: `@media(min-width: 1280px)`,
};

export const Container = styled.div`
  display: flex;

  ${media.mobile} {
    display: block;
  }
`;

