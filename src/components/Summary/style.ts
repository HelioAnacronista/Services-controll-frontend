import styled from "styled-components";

import { mediaquery } from "../../utils/mediaquery";

const media = mediaquery;

export const Container = styled.div`
  display: flex;
  .mx-20 {
    margin: 0 20px;
  }
  ${media.mobile} {
    display: block;
  }
`;
