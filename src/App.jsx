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
import Write from "./pages/Write";
import NotificationPage from "./pages/NotificationPage";
import NotificationContent from "./components/NotificationContent";
import NotificationMessages from "./components/NotificationMessages";
import NavbarOutlet from "./layouts/NavbarOutlet";
import Library from "./pages/Library";
import LibraryCurrentReads from "./components/LibraryCurrentReads";
import LibraryArchive from "./components/LibraryArchive";
import LibraryReadingList from "./components/LibraryReadingList";
import StoryPage from "./pages/StoryPage";
import DetailStory from "./pages/DetailStory";
import SidebarRead from "./components/SidebarRead";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/wp_originals" element={<WpOriginalsPage />} />

        <Route path="/read/:id" element={<StoryPage />} />
        <Route path="/detail_story/:id" element={<DetailStory />} />

        {/* nested route for premium picks */}
        <Route element={<PremiumPicksPage />}>
          <Route path="/premium_picks" element={<PremPicksThisMonth />} />
          <Route path="/premium_picks2" element={<PremiumPicksNextMonth />} />
        </Route>

        {/* nested route for navbar */}
        <Route element={<NavbarOutlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />

          {/* nested route for library page */}
          <Route element={<Library />}>
            <Route path="/library" element={<LibraryCurrentReads />} />
            <Route path="/archive" element={<LibraryArchive />} />
            <Route path="/reading_list" element={<LibraryReadingList />} />
          </Route>

          <Route path="/write" element={<Write />} />

          {/* nested route for notivication page */}
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
