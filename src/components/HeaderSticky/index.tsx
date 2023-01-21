import { useProSidebar } from "react-pro-sidebar";

import SearchBar from "../SearchBar";

import { ContentProfile, Header, Profile, SideBar } from "./style";

function HeaderSticky() {
  const { toggleSidebar } = useProSidebar();

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
        <Profile>Avatar</Profile>
      </ContentProfile>
    </Header>
  );
}

export default HeaderSticky;
