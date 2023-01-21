import styled from "styled-components";

export const Container = styled.div`
  input::placeholder {
    padding: 0.25rem;
    opacity: 0.8;
    font-size: 18px;
  }

  input {
    background: #f8f8f8;
    padding: 0.25rem;
  }

  textarea {
    background: #f8f8f8;
    padding: 0.25rem;
    opacity: 0.8;
    font-size: 18px;
    width: 100%;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 56px 0;
  }

  .input-from {
    margin: 20px 0;
  }
`;

export const ContentFrom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .card-from {
    border: 1px solid #848bc82e;
    border-radius: 0.25rem;
    padding: 1rem;
    margin: 0 20px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
`;

export const ActionsBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .save {
    margin: 2rem 0.25rem;
    button {
      padding: 0.5rem;
    }
  }
  .cancel {
    margin: 2rem 0;
    button {
      padding: 0.5rem;
    }
  }
`;
