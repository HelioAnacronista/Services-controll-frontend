import { createGlobalStyle } from "styled-components";

const media = {
  mobile: `@media(min-width: 300px) and (max-width:764px)`,
  tablet: `@media(min-width: 768px) and (max-width: 1024px)`,
  desktop: `@media(min-width: 1280px)`,
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

.mt-b-40 {
  margin-top: 40px;
  margin-bottom: 40px;
}

  //tables
  .table-border {
    border-radius: 0.25rem;
    border: 1px solid #848bc82e;
    padding: 1rem;
  }


  table {
    width: 100%;
    text-align: center;
  }

  th {
      padding: 0 0.5rem;
  }

  td {
    padding: 0.25rem;
  }

  tr:hover {
    background: #f8f8f8;
    
    font-weight: 600;
  }

  ${media.mobile} {
    table {
      text-align: center;
    }

    th {
      padding: 0 0.5rem;
    }

    td {
    border-bottom: none;
    padding: 0 0.5rem;
    }


    tbody {
      overflow-x: auto;
    }
  }
  
`;
