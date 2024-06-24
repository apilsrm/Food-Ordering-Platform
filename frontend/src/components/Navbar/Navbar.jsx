import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets.js";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="flex justify-between items-center px-0 py-5">
      <img src={assets.logo} alt="" className=" w-36" />
      <ul className="flex list-none gap-5 text-[#49557e] text-lg cursor-pointer">
        <li onClick={()=>setMenu("home")} className={menu === "home" ? " pb-[2px] border-b-2 border-solid border-[#49557e]" : ""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "pb-[2px] border-b-2 border-solid border-[#49557e]" : ""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "pb-[2px] border-b-2 border-solid border-[#49557e]" : ""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "pb-[2px] border-b-2 border-solid border-[#49557e]" : ""}>contact-us</li>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="" className="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute min-h-[10px] min-w-[10px] bg-[tomato] rounded-md top-[-8px] right-[-8px]"></div>
        </div>
        <button className="bg-transparent text-base text-[#49557e] cursor-pointer px-[30px] py-2.5 rounded-[50px] border border-solid border-[tomato] transition duration-300 hover:bg-[#fff4f9]">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
