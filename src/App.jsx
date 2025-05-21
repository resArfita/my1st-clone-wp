import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Greeting from "./pages/Greeting";
import LoginForm from "./pages/LoginForm";
import PremiumPicksPage from "./pages/PremiumPicksPage";
import PremPicksThisMonth from "./components/PremPicksThisMonth";
import PremiumPicksNextMonth from "./components/PremiumPicksNextMonth";
import WpOriginalsPage from "./pages/WpOriginalsPage";
import SearchPage from "./pages/SearchPage";
import Library from "./pages/Library";
import Write from "./pages/Write";
import NotificationPage from "./pages/NotificationPage";
import NotificationContent from "./components/NotificationContent";
import NotificationMessages from "./components/NotificationMessages";
import NavbarOutlet from "./layouts/NavbarOutlet";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/wp_originals" element={<WpOriginalsPage />} />

        {/* nested route for premium picks */}
        <Route element={<PremiumPicksPage />}>
          <Route path="/premium_picks" element={<PremPicksThisMonth />} />
          <Route path="/premium_picks2" element={<PremiumPicksNextMonth />} />
        </Route>

        {/* nested route for navbar */}
        <Route element={<NavbarOutlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/write" element={<Write />} />

          <Route element={<NotificationPage />}>
            <Route path="/notification" element={<NotificationContent />} />
            <Route path="/messages" element={<NotificationMessages />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
