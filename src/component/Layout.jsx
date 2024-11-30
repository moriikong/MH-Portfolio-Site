import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

//import other than header and footer
function Layout(){
    return(
        <>
            <SideBar></SideBar>
            <Outlet></Outlet> 
        </>
    )
}

export default Layout