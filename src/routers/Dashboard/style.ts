import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 375px)`,
  tablet: `@media(max-width: 768px)`,
  desktop: `@media(max-width: 1280px)`,
};



export const Container = styled.div`
  display: flex;

    
  .list-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
  }

`;

export const ContentList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: auto;
  ${media.mobile} {
    overflow: auto;
  }
  ${media.tablet} {
    overflow: auto;
  }
  ${media.desktop} {
    overflow: auto;
  }
`;
