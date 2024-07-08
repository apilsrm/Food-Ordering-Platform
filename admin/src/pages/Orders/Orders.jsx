import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/admin_assets/assets.js";

// eslint-disable-next-line react/prop-types
const Orders = ({url}) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  }

  const statusHandler = async (e, orderId) => {
  // console.log(e, orderId)
  const res = await axios.post(`${url}/api/order/status`,{
    orderId,
    status:e.target.value
  })
  if(res.data.success){
    await fetchAllOrders();
  }
  }

  useEffect(() => {
    fetchAllOrders();
  },[]);
  return (
    <div className="orderadd ">
      <h3>Order Page</h3>
      <div className="orderlist">
        {orders.map((order, index) => (
          <div key={index} className="orderitem grid grid-cols-[0.5fr_2fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] lg:text-sm text-xs lg:p-5 p-0 gap-3 py-2 sm:px-2 sm:py-4 items-start sm:gap-7 border border-solid border-[tomato] mx-0 my-7 text-[#505050]">
            <img className="" src={assets.parcel_icon} alt="" />
            <div className="">
              <p className="orderitemfood font-semibold">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-itemname font-semibold mt-7 mb-1.5">{`${order.address.firstName} ${order.address.lastName}`}</p>
              <div className="orderitemAddress mb-2.5">
                <p>{`${order.address.street},`}</p>
                <p>{`${order.address.city},${order.address.state},${order.address.country},${order.address.zipcode}`}</p>
              </div>
              <p className="order-itemPhone">{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(e)=>statusHandler(e,order._id)} value={order.status} className="bg-[#ffe8e4] border border-solid border-[tomato] w-[max(10vw,120px)] lg:p-2.5 p-1.5  outline-none rounded">
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
