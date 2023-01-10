import ButtonLayout from "../../components/ButtonLayout";
import { CardFrom, Container } from "./style";

function Login() {
  return (
    <>
      <Container>
        <CardFrom>
          <span className="title">BEM VINDO AO CONTROLE DE SERVIÇO</span>
          <div className="icon-login">
            <div className="semicircle">
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className="group">
              <input required type="text" className="input" />
              <span className="highlight" />
              <span className="bar" />
              <label>Conta</label>
            </div>
            <div className="group">
              <input required type="password" className="input" />
              <span className="highlight" />
              <span className="bar" />
              <label>Senha</label>
            </div>

            <button className="btn-login">Conectar</button>
          </form>
        </CardFrom>
      </Container>
    </>
  );
}

export default Login;
