import { useContext, useState } from "react"
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const MyOrders = () => {
    const [data, setData] = useState([]);
    const {url, token} = useContext(StoreContext);

  const fetchOrders = async() => {
    const response = await axios.post(url+"/api/oder/userorders",{},{headers:{token}});
   setData(response.data.data); 
  }

  return (
    <div>
      
    </div>
  )
}

export default MyOrders
