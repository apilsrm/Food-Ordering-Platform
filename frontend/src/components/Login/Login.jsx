import { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
const Login = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Sign Up");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(()=>{
  //  console.log(data)
  // },[data])

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    // console.log("newUrl",newUrl);
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    // console.log("response",response);
     
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    }else{
      // toast.success(response.data.message)
      alert(response.data.message);
    }

  };

  return (
    <div className=" absolute z-[1] w-full h-full bg-[#00000090] grid">
      <form
        onSubmit={onLogin}
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
            <input
              className=" border-solid border-[#c9c9c9] border p-2.5 rounded"
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your Name"
              required
            />
          )}
          <input
            className=" border-solid border-[#c9c9c9] border p-2.5 rounded"
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Your Email"
            required
          />
          <input
            className=" border-solid border-[#c9c9c9] border p-2.5 rounded"
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Your Password"
            required
          />
        </div>
        <button
          type="submit"
          className=" border-none p-4 rounded-md text-white bg-[tomato] text-[15px] cursor-pointer"
        >
          {currentState === "Sign Up" ? "Create account " : "Login"}
        </button>
        <div className="flex items-start gap-2 -mt-4">
          <input className="mt-1" type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span
              className="text-[tomato] font-semibold cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click me
            </span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span
              className="text-[tomato] font-semibold cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
