import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCatAmount } = useContext(StoreContext);

  return (
    <form className="flex items-start smobile:flex-col justify-between  gap-12 mt-24">
      <div className="w-full max-w-[max(30%,500px)] ">
        <p className="text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="flex gap-2.5">
          <input
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="First Name"
          />
          <input
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-2.5">
          <input
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="City "
          />
          <input
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-2.5">
          <input
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="Zip code"
          />
          <input
            className="mb-4 w-full p-2.5 border border-solid border-[#c5c5c5] rounded outline-[tomato]"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
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
              <b>${getTotalCatAmount() === 0 ? 0 : getTotalCatAmount()+50}</b>
            </div>
          </div>
          <button className="mt-7 text-white bg-[tomato] w-[max(15vw,200px)] py-3 px-0 rounded-md cursor-pointer border-none">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
