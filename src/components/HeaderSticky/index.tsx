import { useProSidebar } from "react-pro-sidebar";

import SearchBar from "../SearchBar";

import { useEffect, useState } from "react";
import { UserDTO } from "../../models/user";
import * as userService from "../../services/user-services";
import { ContentProfile, Header, Profile, SideBar } from "./style";

function HeaderSticky() {
  const { toggleSidebar } = useProSidebar();

  //dar get no LocalStorage no user que foi salvo
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findMe().then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  console.log(user);

  return (
    <Header>
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
          <button>{user?.name}</button>
        </Profile>
      </ContentProfile>
    </Header>
  );
}

export default HeaderSticky;
