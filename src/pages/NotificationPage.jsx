import HeaderNotification from "../components/HeaderNotification";
import { Outlet } from "react-router";

const NotificationPage = () => {
    return(
        <>
        <HeaderNotification />
        
        <Outlet />
        </>
    )
}

export default NotificationPage;