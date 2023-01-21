import { AiOutlineCaretDown } from "react-icons/ai";
import { useProSidebar } from "react-pro-sidebar";
import SearchBar from "../SearchBar";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDTO } from "../../models/user";
import * as userService from "../../services/user-services";
import { ContentProfile, Header, Profile, SideBar } from "./style";

function HeaderSticky() {
  const { toggleSidebar } = useProSidebar();

  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findMe().then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  console.log(user);

  const navigate = useNavigate();

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
    </Header>
  );
}

export default HeaderSticky;
