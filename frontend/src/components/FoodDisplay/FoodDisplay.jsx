import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className=" mt-[30px] " id="food-display">
      <h2 className=" text-[max(2vw,24px)] font-[600] ">Top dishes near you</h2>
      <div className="grid grid-cols-auto-fill-minmax mt-[30px] gap-[30px] gap-y-12">
        {food_list.map((items, index) => {
          if (category === "All" || category === items.category) {
            return (
              <FoodItem
                key={index}
                id={items._id}
                name={items.name}
                description={items.description}
                price={items.price}
                image={items.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
