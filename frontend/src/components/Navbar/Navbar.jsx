import { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCatAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  //for dropwon order/logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');

  };

  return (
    <div className="flex justify-between items-center px-0 py-5">
      <Link to="/">
        <img src={assets.logo} alt="" className=" w-36 smobile:w-20" />
      </Link>
      <ul className="flex list-none gap-5 text-[#49557e] text-lg cursor-pointer mobile:hidden">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? " pb-[2px] border-b-2 border-solid border-[#49557e]"
              : ""
          }
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "pb-[2px] border-b-2 border-solid border-[#49557e]"
              : ""
          }
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "pb-[2px] border-b-2 border-solid border-[#49557e]"
              : ""
          }
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us"
              ? "pb-[2px] border-b-2 border-solid border-[#49557e]"
              : ""
          }
        >
          contact-us
        </a>
      </ul>
      <div className="flex items-center gap-10 smobile:gap-5">
        <img src={assets.search_icon} alt="" className=" smobile:w-5" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" className="smobile:w-5" />
          </Link>
          <div
            className={
              getTotalCatAmount() === 0
                ? ""
                : "absolute min-h-[10px] min-w-[10px] bg-[tomato] rounded-md top-[-8px] right-[-8px]"
            }
          ></div>
        </div>
        {!token ? (
          <button
            className="bg-transparent text-base smobile:text-xs text-[#49557e] cursor-pointer px-7 py-2.5 smobile:px-4 smobile:py-1.5 rounded-[50px] border border-solid border-[tomato]  hover:bg-[#fff4f9]"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} alt="" />
            <ul className=" absolute hidden right-0 z-[1] group-hover:flex flex-col gap-2.5 bg-[#fff2ef] py-3 px-8 rounded border border-solid border-[tomato] outline outline-2 outline-white  list-none ">
              <li 
              className="flex items-center gap-1.5 cursor-pointer hover:text-[tomato]">
                <img className="w-5" src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr 
              className=" h-0.5 mx-0 my-2 bg-gray-300 border-none" />
              <li
                onClick={logout}
                className="flex items-center gap-1.5 cursor-pointer ml-0 hover:text-[tomato]"
              >
                <img className="w-5" src={assets.logout_icon} alt="" />
                <p>LogOut</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
