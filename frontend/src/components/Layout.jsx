import { Outlet } from "react-router-dom";
import NavbarPage from "./NavbarPage";



function Layout(){
    return(<>
         <NavbarPage/>
         <Outlet/>
    </>)
}

export default Layout;