/**
 * The `StoreContextProvider` component in this code manages state for a shopping cart application in
 * React, including adding and removing items from the cart and calculating the total amount.
 *  @returns The `StoreContextProvider` component is being returned. It is a context provider component
 * that provides the context value containing `food_list`, `cartItems`, `setCardItems`, `addToCart`,
 * `removeFromCart`, `getTotalCatAmount`, `url`, `token`, and `setToken` to its children components.
 * The context value is provided through the `StoreContext.Provider` component
 */
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCardItems] = useState({});

  const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  //data from database
  const [food_list, setFood_list] = useState([])

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

  const getTotalCatAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
 
//foodlist form db
const fetchFoodList = async () => {
  const response = await axios.get(url+"/api/food/list")
    setFood_list(response.data.data)
}


  //save token while refresh
  useEffect(()=>{
    async function loadData(){
       await fetchFoodList();
       if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
      }
    }
    loadData()
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCardItems,
    addToCart,
    removeFromCart,
    getTotalCatAmount,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
