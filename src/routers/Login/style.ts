import styled from "styled-components";

export const CardFrom = styled.div`
  .form-field-full {
    margin-left: 30px;
  }

  width: 30rem;
  height: 30rem;
  margin: auto;
  background-color: rgb(235, 235, 235);
  padding: 5rem 1rem;
  border-radius: 1rem;

  .btn-login {
    background-color: var(--blue);
    color: var(--white);

    text-align: center;
    width: 100%;
    padding: 10px;
    margin: 40px 0;

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

export const Container = styled.div`
  background-color: #333;

  .container-login {
    padding: 50px;
  }

  .tiltle-center {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #1a202c;
  }

  .full-width {
    width: 100%;
  }

  .full-input-login {
    width: 100%;
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 7px 0 var(--blue);
    outline: none;
    color: dimgray;
    margin-bottom: 1rem;
  }

  .full-input-password {
    width: 100%;
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 7px 0 var(--blue);
    outline: none;
    color: dimgray;
  }

  .icon-login {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 3rem;
  }

  .title {
    font-size: larger;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 5rem;
    color: #2d3748;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  .semicircle,
  .semicircle div {
    /*  Adjust the size of the entire animation here.
      (Remove max size below to go above 300px.) */
    width: 170px;
    height: 170px;
    /* Adjust the speed or timing function of the animation here. */
    animation: 6s rotate141 infinite linear;
    background-repeat: no-repeat;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }

  .semicircle div {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
  }

  .semicircle:before,
  .semicircle div:before {
    content: "";
    width: 100%;
    height: 50%;
    display: block;
    background: radial-gradient(transparent, transparent 65%, #fff 65%, #333);
    background-size: 100% 200%;
  }

  @keyframes rotate141 {
    to {
      transform: rotate(360deg);
    }
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
