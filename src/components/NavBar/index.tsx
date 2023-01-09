

import { MdDesignServices, MdPeopleAlt, MdCategory, MdHome } from 'react-icons/md'

import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import HeaderSticky from '../HeaderSticky';




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
               <HeaderSticky></HeaderSticky>
            </main>
         </div>
      </>
   );
}

export default NavBar;
