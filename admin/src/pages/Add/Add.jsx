import { useState } from "react";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => { 

    const url = "http://localhost:4000"
    const [image, setImage] =useState(false);

    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))

    }

    const onSubmitHandler = async(event)=> {
           event.preventDefault();
           const formData = new FormData();
           formData.append("name",data.name)
           formData.append("description",data.description)
           formData.append("price",Number(data.price))
           formData.append("category",data.category)
           formData.append("image",image)     
           const response = await axios.post(`${url}/api/food/add`, formData);
           if(response.data.success) {
              setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
              })
              setImage(false)
              toast.success(response.data.message)
            //   console.log(setData)
           }else{
            toast.error(response.data.message)
           }
    }     

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

     
  return (
    <div className="w-2/3 ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base">
        <form className=" gap-5 flex flex-col" onSubmit={onSubmitHandler} >
            <div className=" add-img-upload flex flex-col gap-2.5">
                <p className="text-black text-lg"> Upload Image</p>
                <label htmlFor="image">
                    <img className="w-[120px] cursor-pointer" src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="image" id="image" hidden required  className="border-slate-500 border"/>
            </div>
            <div className="w-[max(40%,280px)] flex flex-col gap-2.5">
                <p className="text-black text-lg">Product Name</p>
                <input onChange={onChangeHandler} value={data.name} className="p-2.5 border-slate-500 border rounded-md" type="text" name="name" id="name" placeholder="Type here" />
            </div>
            <div className="w-[max(40%,280px)] flex flex-col gap-2.5">
                <p className="text-black text-lg">Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} className="p-2.5 border-slate-500 border rounded-md" name="description" rows="6" placeholder="Write food description here"></textarea>
            </div>
            <div className="flex gap-8">
                <div className="catergory">
                    <p className="mb-2.5 text-black text-lg">Product Category</p>
                    <select onChange={onChangeHandler} className="text-black max-w-28 p-3 border-slate-500 border rounded-md" title="category" name="category" autoComplete="category">
                        {/* <option value="">---</option> */}
                        <option value="Salad">Salad</option>
                        <option value="Rolls" >Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                        <option value="Pizza">Pizza</option>
                    </select>
                </div>
                <div className="price flex flex-col gap-2.5">
                    <p className="text-black text-lg">Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} className="max-w-28 p-2.5 border-slate-500 border rounded-md" type="Number" name="price" placeholder="$10" />
                </div>
            </div>
            <button type="submit" className="max-w-[120px] border-none p-2.5 bg-black text-white cursor-pointer rounded-md">ADD</button>
        </form>
      
    </div>
  )
}

export default Add
