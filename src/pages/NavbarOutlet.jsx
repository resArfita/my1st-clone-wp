import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const NavbarOutlet = () => {
  return (
    <>
      <Outlet />

      <NavBar />
    </>
  );
};

export default NavbarOutlet;
