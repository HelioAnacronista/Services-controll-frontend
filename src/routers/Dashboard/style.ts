import styled from "styled-components";
import { mediaquery } from "../../utils/mediaquery";

const media = mediaquery;

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
