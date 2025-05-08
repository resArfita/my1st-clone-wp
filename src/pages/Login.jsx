import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { SiWattpad } from "react-icons/si";
const Login = () => {
  const navigate = useNavigate();

  const goToLoginForm = () => {
    navigate("/loginform");
  };

  return (
    <>
      {/* <h1>this is Login</h1>
      <button onClick={goToGreeting}>Go</button> */}

      <div className="flex flex-col items-center mt-28">
        <div className="flex items-center gap-2 mb-4">
           <h1 className="text-3xl font-semibold text-wp-orange">wattpad</h1>
           <SiWattpad size={50} color={"#fe5009"} />
        </div>
        <h2 className="text-center text-2xl font-bold mb-4">
          The world's largest
          <br /> storytelling community
        </h2>
        <div className="flex items-center gap-2 border-2 border-nautral-950 rounded-full py-2 px-18 my-4">
          <FcGoogle size={25} />
          <p className="font-bold text-sm">Sign up with Google</p>
        </div>
        <div className="flex items-center gap-2 border-2 border-nautral-950 rounded-full py-2 px-16">
          <FaFacebookSquare size={25} color={"#3b5998"} />
          <p className="font-bold text-sm">Sign up with Facebook</p>
        </div>
        <div className="my-4 ">
          <p>or</p>
        </div>
        <div className="border bg-black cursor-pointer rounded-full py-2 px-24">
          <p className="text-sm text-white font-semibold">Sign up with email</p>
        </div>

        <p className="mt-30 font-bold cursor-pointer" onClick={goToLoginForm}>I already have an account</p>
      </div>
    </>
  );
};
export default Login;
