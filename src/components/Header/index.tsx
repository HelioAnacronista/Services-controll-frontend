import { ContentHeader, ContentProfile, Profile, SideBar } from './style';

import { useEffect, useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useProSidebar } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';

import { UserDTO } from '../../models/user';
import * as userService from '../../services/user-services';
import SearchBar from '../SearchBar';


function Header() {
  const { toggleSidebar } = useProSidebar();

  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findMe().then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <ContentHeader>
      <SideBar>
        <div>
          <button
            className="btn-menu-style my-10"
            onClick={() => toggleSidebar()}
          >
            <h4>MENU</h4>
          </button>
        </div>
      </SideBar>

      <ContentProfile>
        <SearchBar></SearchBar>
        <Profile>
          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            {user?.name}
            <AiOutlineCaretDown></AiOutlineCaretDown>
          </button>
        </Profile>
      </ContentProfile>
    </ContentHeader>
  );
}

export default Header;
