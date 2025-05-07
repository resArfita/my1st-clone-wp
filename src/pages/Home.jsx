import { useNavigate } from "react-router"

const Home = () => {

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/login")
    }
    return (
        <div>
            <h1>this is Home</h1>
            <button onClick={goToLogin}>Login</button>
        </div>
    )
}

export default Home