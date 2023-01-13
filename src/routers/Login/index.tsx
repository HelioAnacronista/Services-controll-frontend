import { CardFrom, ContainerLogin, ContentLogOr, Container } from "./style";

import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { ContextToken } from "../../utils/context-token";
import * as authServices from "../../services/auth-services";

import { CredentialsDTO } from "../../models/auth";
import logoImg from "../../assets/logo-color.svg";
import BackgroudGif from "../../components/BackgroudGif";

function Login() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { setContextTokenPayload } = useContext(ContextToken);

  const navigate = useNavigate();

  const [fromData, setFromData] = useState<CredentialsDTO>({
    username: "",
    password: "",
  });

  //Faz uma requisiçao para backend para o login e salvando o token
  function handleSubmit(event: any) {
    event.preventDefault();
    authServices
      .loginRequest(fromData)
      .then((response) => {
        authServices.saveAccessToken(response.data.access_token);
        setContextTokenPayload(authServices.getAccessTokenPayload());
        navigate("/");
        console.log(authServices.getAccessTokenPayload());
      })
      .catch((error) => {
        console.log("error de login", error);
      });
  }

  function handleInputChange(event: any) {
    //hook value of box
    const value = event.target.value;
    //hook name of box
    const name = event.target.name;

    //Atualizar o FromData
    setFromData({ ...fromData, [name]: value });
  }

  return (
    <>
      <Container className="container">
        <ContainerLogin>
          <header>
            <img className="logo" src={logoImg} alt="" />
          </header>

          <div className="subtitle">
            <div>
              <h1>Olá!</h1>
            </div>
            <div>
              <h3>Já nos encontramos antes?</h3>
            </div>
          </div>

          <CardFrom>
            <form onSubmit={handleSubmit}>
              <div className="group">
                <input
                  name="username"
                  value={fromData.username}
                  onChange={handleInputChange}
                  type="text"
                  className="input"
                />

                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
              </div>
              <div className="group">
                <input
                  name="password"
                  value={fromData.password}
                  onChange={handleInputChange}
                  type="password"
                  className="input"
                />

                <span className="highlight" />
                <span className="bar" />
                <label>Senha</label>
              </div>

              <button type="submit" className="btn-login">
                Conectar
              </button>
            </form>
          </CardFrom>

          <ContentLogOr>
            <div className="container-divider">
              <div className="divider"></div>
              <span> OU </span>
              <div className="divider"></div>
            </div>

            <div className="container-create">
              <div>
                <p>Não tem uma conta?</p> <h4>Inscrever-se</h4>
              </div>
              <div>
                <h4>Entrar com SSO</h4>
              </div>
            </div>
          </ContentLogOr>
        </ContainerLogin>
        {
          screenWidth > 1000 
          ? 
          <BackgroudGif />
          : 
          null
        }


      </Container>
    </>
  );
}

export default Login;
