import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className=" absolute z-[1] w-full h-full bg-[#00000090] grid">
      <form
          className="place-self-center w-[max(23vw,330px)] flex flex-col gap-6 text-[#808080] bg-white px-[30px] py-6 rounded-lg text-sm fade-in "
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-black font-medium">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            className=" w-4 cursor-pointer font-normal"
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input className=" border-solid border-[#c9c9c9] border p-2.5 rounded" type="text" name="name" placeholder="Your Name" required />
          )}
          <input className=" border-solid border-[#c9c9c9] border p-2.5 rounded" type="email" name="email" placeholder="Your Email" required />
          <input className=" border-solid border-[#c9c9c9] border p-2.5 rounded" type="password" name="password" placeholder="Your Password" required />
        </div>
        <button className=" border-none p-4 rounded-md text-white bg-[tomato] text-[15px] cursor-pointer">
          {currentState==="Sign Up"?"Create account ":"Login"}
        </button>
        <div className="flex items-start gap-2 -mt-4">
          <input className="mt-1" type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span className="text-[tomato] font-semibold cursor-pointer" onClick={() => setCurrentState("Sign Up")}>Click me</span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span className="text-[tomato] font-semibold cursor-pointer" onClick={() => setCurrentState("Login")}>Login here</span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
