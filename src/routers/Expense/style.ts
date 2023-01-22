import styled from "styled-components";

export const Container = styled.div`
  .btn-create {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
    }
  }
`;

export const ContentList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
`;
