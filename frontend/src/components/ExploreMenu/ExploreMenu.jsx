import { menu_list } from "../../assets/frontend_assets/assets"

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className=" flex flex-col gap-5" id="explore-menu">
      <h1 className=" text-[#121212] font-medium text-[max(2vw,24px)]">Explore our menu</h1>
      <p className=" max-w-[60%] text-[#808080]">Choose from a  diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your during experience, one delicious meal at a time.</p>
       <div className="flex justify-between items-center gap-7 text-center my-5 mx-0 overflow-x-scroll no-scrollbar">
        {menu_list.map((items, index)=> {
          return(
            <div 
            onClick={()=>setCategory(prev => prev=== items.menu_name? "All": items.menu_name)}
            key={index}
            className ="">
              <img  className= {category === items.menu_name? (" border-[4px] border-solid border-[tomato] p-0.5  w-[7.5vw] min-w-20 cursor-pointer rounded-[50%]  transition duration-300"):("w-[7.5vw] min-w-20 cursor-pointer rounded-[50%]  transition duration-500 ease-in-out") }  src={items.menu_image} alt="" />
              <p>{items.menu_name}</p>
            </div>
          )
        })}
       </div>
       <hr className=" mx-0 my-[10px] h-[2px]  bg-slate-200 border-none" />
    </div>
  )
}

export default ExploreMenu
