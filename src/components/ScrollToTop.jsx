import { useLocation, useNavigationType } from "react-router";
import { useEffect } from "react";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if(navigationType === "PUSH") {
            window.scrollTo(0, 0);
        }
    }, [pathname, navigationType]);

    return null;
}

export default ScrollToTop;