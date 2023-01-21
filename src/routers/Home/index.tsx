import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default Home;
