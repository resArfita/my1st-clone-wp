import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router";


const NavBar = () => {
    return (
        <>
        <div className="sticky bottom-0 bg-white flex items-center justify-between px-8 pt-6 pb-3">
            <Link to="/"><FiHome size={30} className="cursor-pointer"/></Link>
            <Link to="/search"><FiSearch size={30} className="cursor-pointer"/></Link>
            <Link to="/library"><LuLibrary size={32} className="cursor-pointer"/></Link>
            <Link to="/write"><GoPencil size={30} className="cursor-pointer"/></Link>
            <Link to="/notification"><BiBell size={32} className="cursor-pointer"/></Link>
        </div>
        </>
    )
}

export default NavBar;