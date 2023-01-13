

import { MdDesignServices, MdPeopleAlt, MdCategory, MdHome } from 'react-icons/md'

import { Sidebar, Menu, MenuItem, useProSidebar, MenuItemStyles, menuClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import HeaderSticky from '../HeaderSticky';


const themes = {
  light: {
    sidebar: {
      backgroundColor: '#fff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#7380ec',
      hover: {
        backgroundColor: '#e6f2fd',
        color: '#333333',
      },
      active: {
        backgroundColor: '#13395e',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
};

const menuItemStyles: MenuItemStyles = {
   root: {
     fontSize: '20px',
     fontWeight: 400,
   },
   icon: {
     color: themes.light.menu.icon
   },
   SubMenuExpandIcon: {
     color:  themes.light.menu.icon
   },
   label: ({ open }) => ({
     fontWeight: open ? 600 : undefined,
   }),
 };

function NavBar() {
   const { toggleSidebar } = useProSidebar();


   
   return (
      <>
         <div className='header-main'>
            <Sidebar 

            backgroundColor='#fff'
            color='#333'

            breakPoint="always">

               <Menu menuItemStyles={menuItemStyles}>
                  <Link to={'/'}><MenuItem 
                  
                  icon={<MdHome></MdHome>}>Inicio
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
