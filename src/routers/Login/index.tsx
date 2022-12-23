import './style.scss'

function Login() {
   return (<>
      <div className="container-login">
         <form className="form">
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
                                                <div>

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
            </div>

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

            <button className="button2">
               Entrar
            </button>

         </form>
      </div>

   </>);
}

export default Login;