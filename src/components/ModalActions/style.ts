import styled from "styled-components";

export const Container = styled.div`
  .title {
    margin: 1rem 0;
  }

  .btn-exit {
    margin-top: 0.5rem;
  }

  position: fixed;
  /* para que o elemento fique no lugar mesmo se a página for rolada */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .dialog-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* outras propriedades, como largura e altura */
    padding: 0.25rem 1rem 0.1rem 1rem;
    width: auto;
    height: auto;
    border-radius: 10px;
    background: rgb(236, 236, 236);
    .dialog-card {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }

  .mx-20 {
    margin: 0 20px;
  }

  .box-btn-n {
    color: var(--red);
  }

  button {
    padding: 0.5rem;
    font-weight: 500;
    transition: 0.3s;
  }

  button:hover {
    opacity: 1;
    border-radius: 0.25rem;
    background-color: var(--subcolor);
  }
`;
