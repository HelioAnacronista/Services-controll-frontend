import './style.css'

import { MdDesignServices, MdPeopleAlt, MdCategory, MdHome } from 'react-icons/md'

import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';



function NavBar() {
   const { toggleSidebar } = useProSidebar();
   return (
      <>
         <div className='header-main'>
            <Sidebar breakPoint="always" className='side-bar-menu '>
               <Menu>
                  <Link to={'/'}><MenuItem icon={<MdHome></MdHome>}>Inicio
                  </MenuItem></Link>
                  <Link to={'/category'}><MenuItem icon={<MdCategory></MdCategory>}>Categoria
                  </MenuItem></Link>
                  <Link to={'/client'}><MenuItem icon={<MdPeopleAlt></MdPeopleAlt>}>Cliente
                  </MenuItem></Link>
                  <Link to={'/work'} ><MenuItem icon={<MdDesignServices></MdDesignServices>}> Serviços
                  </MenuItem> </Link>
               </Menu>
            </Sidebar>
            <main>
               <div className='header-nav'>
                  <button className="sb-button cssbuttons-io-button" onClick={() => toggleSidebar()}>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                     <span>MENU</span>
                  </button>
                  <Link to={'/'}>
                     <button className="sb-button cssbuttons-io-button btn-home-menu">
                        <MdHome></MdHome>
                        <span>HOME</span>
                     </button>
                  </Link>

               </div>
            </main>
         </div>

      </>
   );
}

export default NavBar;
