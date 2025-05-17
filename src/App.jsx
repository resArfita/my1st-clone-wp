import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Greeting from "./pages/Greeting"
import LoginForm from "./pages/LoginForm"
import PremiumPicksPage from "./pages/PremiumPicksPage"
import WpOriginalsPage from "./pages/WpOriginalsPage"
function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/loginform" element={<LoginForm />}/>
        <Route path="/premium_picks" element={<PremiumPicksPage />}/>
        <Route path="/wp_originals" element={<WpOriginalsPage />}/>
      </Routes>
    </>
  )
}

export default App
