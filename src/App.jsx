import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Greeting from "./pages/Greeting"
import LoginForm from "./pages/LoginForm"
function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/login" element={<Login />}/>
        <Route path="loginform" element={<LoginForm />}/>
      </Routes>
    </>
  )
}

export default App
