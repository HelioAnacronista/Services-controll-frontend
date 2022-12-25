import './style.scss';

import { useContext, useEffect, useState } from 'react';
import { MdHome } from 'react-icons/md';
import { useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar';

import { ContextSearch } from '../../utils/context-search';

type Props = {
   name: string;
}

function HeaderSticky() {
   const { toggleSidebar } = useProSidebar();

   useEffect(() => {
      const onScroll = () => {
         const header = document.querySelector('header');
         header?.classList.add('sticky');
         header?.classList.remove('sticky');
      };
      window.addEventListener('scroll', onScroll);
      return () => {
         window.removeEventListener('scroll', onScroll);
      };
   }, []);

   //Pesquisa  
   const { setContextSearch } = useContext(ContextSearch)



   return (
      <header className="sticky">
      <div className='container'>
         <div className='header-sticky-nav'>
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
            <SearchBar></SearchBar>
         </div>
      </div>
   </header>
   );
};

export default HeaderSticky;