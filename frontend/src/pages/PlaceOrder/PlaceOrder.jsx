import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCatAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //to verify
  // useEffect(()=>{
  //  console.log(data)
  // },[data])

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    // console.log("orderItems: ", orderItems);
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCatAmount()+50,

    }
    let  response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      // console.log("sessionUrl",response.data);
      const {session_url} = response.data;
      window.location.replace(session_url);

    }
    else{
      alert("Error");
    }
  };
  return (
    <form
      onSubmit={placeOrder}
      className="flex items-start smobile:flex-col justify-between  gap-12 mt-24"
    >
      <div className="w-full max-w-[max(30%,500px)] ">
        <p className="text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="flex gap-2.5">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
          type="text"
          placeholder="Email Address"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-2.5">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="City "
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-2.5">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="Zip code"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="w-full max-w-[max(40%,500px)] smobile:mb-5">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className=" text-[#555]">
            <b>Cart Totals</b>
          </h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCatAmount()}</p>
            </div>
            <hr className="my-2.5 mx-0" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCatAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr className="my-2.5 mx-0" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCatAmount() === 0 ? 0 : getTotalCatAmount() + 50}</b>
            </div>
          </div>
          <button
            type="submit"
            className="mt-7 text-white bg-[tomato] w-[max(15vw,200px)] py-3 px-0 rounded-md cursor-pointer border-none"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
