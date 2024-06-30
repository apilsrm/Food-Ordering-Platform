import { NavLink } from "react-router-dom";
import { assets } from "../../assets/admin_assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-solid border border-[#a9a9a9] border-t-0 text-[max(1vw,10px)] ">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 border-solid border border-[#a9a9a9] border-r-0 px-2.5 py-2 rounded-l cursor-pointer ${
              isActive ? "bg-[#fff0ed] border-[tomato]" : ""
            }`
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:block ">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 border-solid border border-[#a9a9a9] border-r-0 px-2.5 py-2 rounded-l cursor-pointer ${
              isActive ? "bg-[#fff0ed] border-[tomato]" : ""
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block ">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 border-solid border border-[#a9a9a9] border-r-0 px-2.5 py-2 rounded-l cursor-pointer ${
              isActive ? "bg-[#fff0ed] border-[tomato]" : ""
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block ">Order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
