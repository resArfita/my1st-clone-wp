import HeaderLibrary from "../components/HeaderLibrary";
import { Outlet } from "react-router";

const Library = () => {
    return(
        <>
        <HeaderLibrary />
        
        <Outlet />
        </>
    )
}

export default Library;