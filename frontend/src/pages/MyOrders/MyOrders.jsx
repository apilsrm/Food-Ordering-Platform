import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import {assets} from "../../assets/frontend_assets/assets.js"

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    // console.log("respone form myOrder/fetch",response.data.data)
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="mx-0 my-12">
      <h2>My Orders</h2>
      <div className="flex flex-col gap-5 mt-7">
        {data.map((order, index) => {
          return <div key={index} className="grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_] mobile:grid-cols-[1fr_2fr_1fr_] mobile:gap-y-1 mobile:text-xs items-center gap-7 text-sm px-5 py-2.5 text-[#454545] border border-solid border-[tomato]">
            <img className="w-12" src={assets.parcel_icon} alt="" />
            <p>{order.items.map((item,index)=> {
              if(index === order.items.length-1){
                return item.name+" x "+item.quantity
              }else{
                return item.name+" x "+item.quantity+", "

              } //last items doesnot get comma 
            })}</p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p><span className="text-red-500">&#x25cf;</span><b className="font-medium text-[#454545]">{order.status}</b></p>
            <button className="px-0 py-3 rounded bg-red-100 mobile:text-xs hover:bg-red-200 cursor-pointer text-[#454545]">Track Order</button>
          </div>;
        })}
      </div>
    </div>
  );
};

export default MyOrders;
