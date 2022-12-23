import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";

function Home() {
   return ( 
      <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      </>
    );
}

export default Home;