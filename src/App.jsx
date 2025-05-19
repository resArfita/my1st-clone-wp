import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Greeting from "./pages/Greeting";
import LoginForm from "./pages/LoginForm";
import PremiumPicksPage from "./pages/PremiumPicksPage";
import PremiumPicksNextMonth from "./components/PremiumPicksNextMonth";
import WpOriginalsPage from "./pages/WpOriginalsPage";
import SearchPage from "./pages/SearchPage";
import Library from "./pages/Library";
import Write from "./pages/Write";
import Notification from "./pages/Notification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/wp_originals" element={<WpOriginalsPage />} />
        <Route path="/premium_picks" element={<PremiumPicksPage/>} />
        <Route path="/premium_picks2" element={<PremiumPicksNextMonth />} />
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/library" element={<Library />}/>
        <Route path="/write" element={<Write />}/>
        <Route path="/notification" element={<Notification />}/>
      </Routes>
    </>
  );
}

export default App;
