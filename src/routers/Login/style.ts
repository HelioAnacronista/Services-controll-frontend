import styled from 'styled-components';

import { mediaquery } from '../../utils/mediaquery';

const media = mediaquery;

export const Container = styled.div`
  display: flex;
  width: auto;

  .bg-gif {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${media.mobile} {
    .bg-gif {
      max-width: 400px;
    }
  }
`;

export const ContainerLogin = styled.div`
  width: 40%;

  ${media.mobile} {
    width: 100%;
  }

  ${media.tablet} {
    width: 100%;
  }

  header {
    width: 200px;
    padding: 0 1rem;
  }

  .subtitle {
    padding: 0 1rem;
  }

  .card-gif {
    display: flex;
  }

  /* input css */
  .group {
    margin-bottom: 45px;
    position: relative;
    width: 100%;
  }

  .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-bottom: 1px solid var(--blue);
    background: transparent;
    width: 100%;
  }

  .input:focus {
    outline: none;
  }

  label {
    color: var(--blue);
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .input:focus ~ label,
  .input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: var(--blue);
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: var(--blue);
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  .input:focus ~ .bar:before,
  .input:focus ~ .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  .input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: #fffeff;
    }

    to {
      width: 0;
      background: transparent;
    }
  }
`;

export const CardFrom = styled.div`
  .form-field-full {
    margin-left: 30px;
  }

  margin: auto;
  padding: 2rem 1rem;
  border-radius: 1rem;

  .btn-login {
    background-color: var(--blue);
    color: var(--white);

    text-align: center;
    width: 100%;
    padding: 10px;

    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;

    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em var(--blue) (164, 79%, 37%, 0.596);
    letter-spacing: 0.05em;
    border-radius: 20em;

    :hover {
      box-shadow: 0 0.5em 1.5em -0.5em var(--blue);
    }

    :active {
      box-shadow: 0 0.3em 1em -0.5em var(--blue);
    }
  }
`;

export const ContentLogOr = styled.div`
  padding: 0 1rem;
  .container-divider {
    display: flex;
    align-items: center;
    .divider {
      flex: 1 1 auto;
      background: rgb(205, 206, 221);
      height: 1px;
    }

    span {
      box-sizing: border-box;
      margin: 0px 15px;
      min-width: 0px;
    }
  }

  .container-create {
    padding: 0.25rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
