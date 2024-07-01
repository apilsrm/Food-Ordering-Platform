import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCatAmount, url } = useContext(StoreContext);
 
  const navigate = useNavigate();
  return (
    <>
      <div className=" my-24">
        <div className="cartitems">
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] smobile:grid-cols-[1fr_1fr_1fr_1fr_1fr_0.5fr] items-center text-gray-800 text-[max(1vw,12px)]">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p className="smobile:text-[12px] smobile:pr-1">Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className=" w-full h-0.5 mx-0 mb-2 bg-gray-500 border-none" />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index} className="">
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] smobile:grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.5fr_0.5fr] items-center text-gray-800 text-[max(1vw,12px)] mx-0 my-2.5">
                    <img 
                    className="w-16 smobile:w-8 rounded-md" 
                    src={`${url}/images/${item.image}`}
                     alt="" />
                    <p className="text-black text-sm smobile:text-xs">{item.name}</p>
                    {/* <p> ID: {item._id}</p> */}
                    <p className="text-black text-sm smobile:text-xs smobile:pl-2">${item.price}</p>
                    <p className="text-black text-base smobile:text-xs smobile:pl-2">
                      {cartItems[item._id]}
                    </p>
                    <p className="text-black text-base smobile:text-xs smobile:pl-2">
                      ${item.price * cartItems[item._id]}
                    </p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cursor-pointer text-black text-lg hover:text-red-600 smobile:pl-2"
                    >
                      X{" "}
                    </p>
                  </div>
                  <hr className="w-full h-0.5 bg-gray-300 border-none" />
                </div>
              );
            }
          })}
        </div>
        <div className=" mobile:flex-col-reverse mt-20 flex justify-between gap-[max(12vw,20px)]">
          <div className="flex-1 flex flex-col gap-5">
            <h2 className=" text-[#555]"><b>Cart Totals</b></h2>
            <div >
              <div className="flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>${getTotalCatAmount()}</p>
              </div>
              <hr  className="my-2.5 mx-0"/>
              <div className="flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>${getTotalCatAmount() === 0 ? 0 : 50}</p>
              </div>
              <hr className="my-2.5 mx-0"/>
              <div className="flex justify-between text-[#555]">
                <b>Total</b>
                <b>${getTotalCatAmount() === 0 ? 0 : getTotalCatAmount()+50}</b>
              </div>
            </div>
              <button onClick={()=> navigate('/order')} className="text-white bg-[tomato] w-[max(15vw,200px)] py-3 px-0 rounded-md cursor-pointer border-none">PROCEED TO CHECKOUT</button>
          </div>
           <div className="flex-1 mobile:justify-start">
            <div >
              <p className="text-[#555]">If you have a promo code, Enter it here</p>
              <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-md">
                <input className="bg-transparent outline-none pl-2.5" type="text" placeholder="Enter Promo Code" />
                <button className="w-[max(10vw,150px)] py-3 px-1.5 bg-black text-white  rounded-md">Submit</button>
              </div>
            </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
