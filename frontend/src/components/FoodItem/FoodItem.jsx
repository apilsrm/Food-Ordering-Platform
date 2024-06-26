import { useState } from "react"
import { assets } from "../../assets/frontend_assets/assets"

const FoodItem = ({id,name,price,description,image}) => {

const [itemCount, setItemCount]= useState(0);
  return (
   
      
      <div className=" w-full m-auto rounded-2xl box-shadow fade-in duration-150 ">
        <div className="relative">
            <img className="w-auto rounded-t-2xl" src={image} alt="" />
            {!itemCount 
                 ? <img className="w-[35px] absolute bottom-4 right-4 cursor-pointer rounded-[50%]" onClick={()=> setItemCount(prev => prev+1)} src={assets.add_icon_white} alt="" />
                 : <div className="absolute bottom-4 right-4 flex items-center gap-2 p-1.5 rounded-[50px] text-white">
                    <img onClick={()=>setItemCount(prev => prev+1)} src={assets.remove_icon_red} alt="" />
                    <p className="text-black  font-medium text-lg">{itemCount}</p>
                    <img onClick={()=>setItemCount(prev => prev+1)} src={assets.add_icon_green} alt="" />
                 </div>
            }
        </div>
        <div className=" p-5">
            <div className="flex justify-between items-center mb-3">
                <p className="text-[20px] font-medium">{name}</p>
                <img className="w-[70px]" src={assets.rating_starts} alt="" />
            </div>
            <p className="text-[#676767] text-sm  ">{description}</p>
            <p className="text-[tomato] text-[22px] font-medium  my-2 mx-0">${price}</p>
        </div>
      </div>
  
  )
}

export default FoodItem
