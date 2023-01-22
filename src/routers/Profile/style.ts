import styled from "styled-components";

export const Container = styled.div`
  .btn-edit {
    padding-top: 0.25rem;
    border-radius: 0.25rem;
    transition: 0.3s;
  }
  .btn-edit:hover {
    background-color: var(--yellow);
    color: var(--white);
  }

  .card {
    margin-top: 2rem;

    border-radius: 0.25rem;
    border: 1px solid #848bc82e;
    padding: 1rem;
  }

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
