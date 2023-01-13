import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ContextToken } from '../../utils/context-token';
import * as authServices from '../../services/auth-services'
import { CardFrom, Container } from "./style";
import { CredentialsDTO } from '../../models/auth';

function Login() {
  
  const { setContextTokenPayload } = useContext(ContextToken)


  const navigate = useNavigate();

   const [fromData, setFromData] = useState<CredentialsDTO>({
      username: '',
      password: ''
   });

   //Faz uma requisiçao para backend para o login e salvando o token
   function handleSubmit(event: any) {
      event.preventDefault()
      authServices.loginRequest(fromData)
         .then(response => {
            authServices.saveAccessToken(response.data.access_token);
            setContextTokenPayload(authServices.getAccessTokenPayload())
            navigate('/')
            console.log(authServices.getAccessTokenPayload())
         })
         .catch(error => {
            console.log("error de login", error)
         })
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
      <Container>
        <CardFrom>
          <span className="title">BEM VINDO AO CONTROLE DE SERVIÇO</span>
          <div className="icon-login">
            
            
          </div>
          <form onSubmit={handleSubmit}>
            <div className="group">

              <input name='username'
              value={fromData.username} onChange={handleInputChange}
              type="text" className="input" />

              <span className="highlight" />
              <span className="bar" />
              <label>Email</label>
            </div>
            <div className="group">

              <input name='password'
              value={fromData.password} onChange={handleInputChange}
              type="password" className="input" 
              />

              <span className="highlight" />
              <span className="bar" />
              <label>Senha</label>
            </div>

            <button type="submit" className="btn-login">Conectar</button>
          </form>
        </CardFrom>
      </Container>
    </>
  );
}

export default Login;
