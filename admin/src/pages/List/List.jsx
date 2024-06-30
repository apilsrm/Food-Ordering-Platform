import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data)
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  
  const removeFood = async(foodId) => {
  // console.log(foodId);
  // console.log(`${url}/api/food/remove/${foodId}`);
  const res = await axios.delete(`${url}/api/food/remove/${foodId}`)
    await fetchList()
    if(res.data.success){
      toast.success( res.data.message || "Product Deleted Successfully !!")
    }else{
      toast.error("Couldn't Delete , Error")
    }
  }


   useEffect(()=> {
    fetchList()
   },[])

  return( 
  <div className="list w-2/3 ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base flex flex-col gap-5">
   <p>All Foods List</p>
     <div className="listtable">
      <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr_0.5fr] items-center gap-2.5 px-4 py-3 border border-solid border-[#cacaca] bg-[#f9f9f9]">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item,index)=>{
        return(
          <div key={index} className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr_0.5fr] items-center gap-2.5 px-4 py-3 border border-solid border-[#cacaca]">
            <img className="w-[50px]" src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={()=>removeFood(item._id)} className="cursor-pointer hover:text-red-700">X</p>
          </div>
        )
      })}

     </div>
  </div>
  )
};

export default List;
