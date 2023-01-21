import { useProSidebar } from "react-pro-sidebar";

import SearchBar from "../SearchBar";

import { useContext } from "react";
import { ContextUser } from "../../utils/context-user";
import { ContentProfile, Header, Profile, SideBar } from "./style";

function HeaderSticky() {
  const { toggleSidebar } = useProSidebar();

  //dar get no LocalStorage no user que foi salvo

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
          <button>avatar</button>
        </Profile>
      </ContentProfile>
    </Header>
  );
}

export default HeaderSticky;
