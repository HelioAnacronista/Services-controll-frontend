import { useContext, useEffect, useState } from 'react'
import { MdHome } from 'react-icons/md'
import { useProSidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

import SearchBar from '../SearchBar'

import { Header, Nav } from './style'

function HeaderSticky() {
  const { toggleSidebar } = useProSidebar()

  return (
    <Header className="sticky">
      <Nav>

        <button className='btn-menu-style my-10'
          onClick={() => toggleSidebar()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            ></path>
          </svg>
          <span>MENU</span>
        </button>

        <Link to={'/'}>
          <button className="btn-menu-style my-10">
            <MdHome></MdHome>
            <span>HOME</span>
          </button>
        </Link>

        <SearchBar></SearchBar>
      </Nav>
    </Header>
  )
}

export default HeaderSticky
