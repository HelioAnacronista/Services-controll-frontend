import { createGlobalStyle } from "styled-components";

const media = {
  mobile: `@media(max-width: 375px)`,
  tablet: `@media(max-width: 768px)`,
  desktop: `@media(max-width: 1280px)`,
};

export const Container = createGlobalStyle`


:root {
  --green:#5bf1bf;
  --red:#ff7782;
  --blue:#8691ed;
  --yellow:#ffbb5a;
  --white:#FFF;
}

/* reset body e css */

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Poppins', sans-serif;
}

/* Remover list styles padrão */
ul,
ol {
  list-style: none;
}

/* Remover estilos de links padrão */
a {
  text-decoration: none;
  color: inherit;
}

/* Remover estilos de botões padrão */
button {
  background-color: transparent;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

/* Remover estilos de imagens padrão */
img {
  max-width: 100%;
  height: auto;
  border: 0;
}




.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.btn-center {
  display: flex;
  justify-content: center;
  align-items: center;
}





.loader-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(77, 77, 77, 0.128);
  z-index: 1;
}

.spinner {
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: spin-anim 1.2s linear infinite;
}

@keyframes spin-anim {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.input-c-c {
  width: 100%;
}

.mt-20 {
  margin-top: 20px;
}

.my-10 {
  margin: 10px 0;
}

.mt-30 {
  margin-top: 90px;
  margin-bottom: 20px;
}

.details-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .details-card-work {
    margin: 0 20px;

  }

  .details-card-cliet {
    margin: 0 20px;
  }

  .details-card-category {
    margin: 0 20px;
  }
}

.divide-text {
  border: 1px solid rgba(0, 0, 0, 0.131);
}

.title-details {
  margin-top: 1.3rem;
  padding: 1rem;
  transition: all 300ms ease;

  h1 {
    font-weight: 700;
    font-size: 30px;
  }
}


.div-c {
  justify-content: center;
}

.my-20 {
  margin: 20px 0;
}

.mx-20 {
  margin: 0 20px;
}

.card-create {
  display: flex;
  justify-content: center;
  align-items: center;
}

  table {
    width: 100%;
    text-align: center;
  }

  td {
    border-bottom: 1px solid #848bc82e;
  }

  ${media.mobile} {
    table {
      text-align: center;
    }

    tbody {
      overflow-x: auto;
    }
  }
`;
