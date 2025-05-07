// import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { SiWattpad } from "react-icons/si";
const LoginForm = () => {
//   const navigate = useNavigate();

//   const goToGreeting = () => {
//     navigate("/greeting");
//   };

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div className="flex items-center gap-2 mb-2">
           <h1 className="text-2xl font-semibold text-wp-orange">wattpad</h1>
           <SiWattpad size={34} color={"#fe5009"} />
        </div>
        <div className="flex items-center cursor-pointer gap-2 border-2 border-nautral-950 rounded-full py-2 px-18 my-4">
          <FcGoogle size={25} />
          <p className="font-bold text-sm">Sign up with Google</p>
        </div>
        <div className="flex items-center cursor-pointer gap-2 border-2 border-nautral-950 rounded-full py-2 px-16">
          <FaFacebookSquare size={25} color={"#3b5998"} />
          <p className="font-bold text-sm">Sign up with Facebook</p>
        </div>
        <div className="my-4 ">
          <p>or</p>
        </div>
        <input type="text" placeholder="Email" className="border rounded-full py-2 w-80 mb-5" />
        <input type="password" placeholder="Password" className="border rounded-full py-2 w-80 mb-5" />
        <div className="border bg-black rounded-full py-2 w-80 my-4">
          <p className="text-sm text-white cursor-pointer text-center font-semibold">Login</p>
        </div>
        <p className="font-bold cursor-pointer">Forgot password?</p>


        <p className="mt-25 mb-5 font-bold cursor-pointer">Don't have an account? Sign up</p>
      </div>
    </>
  );
};
export default LoginForm;
