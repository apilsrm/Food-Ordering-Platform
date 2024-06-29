import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCardItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } //for first entry
    else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    } //if alerady items in card
  };
  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);


  const getTotalCatAmount =() => {
    let totalAmount = 0;
    for(const item in cartItems){
      if (cartItems[item] > 0){
        let itemInfo = food_list.find((product)=>product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
      
    }
    return totalAmount
  }

  const contextValue = {
    food_list,
    cartItems,
    setCardItems,
    addToCart,
    removeFromCart,
    getTotalCatAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
