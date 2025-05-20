import HeaderPremiumPicks from "../components/HeaderPremiumPicks";
import { Outlet } from "react-router";

const PremiumPicksPage = () => {
  return (
    <>
      <HeaderPremiumPicks />

      <Outlet />
    </>
  );
};

export default PremiumPicksPage;
