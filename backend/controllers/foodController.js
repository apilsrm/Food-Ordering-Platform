import foodModel from "../models/foodModel.js";
import fs from 'fs';

//add
const addFood = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await food.save();
        res.status(201).json({
            success: true,
            message:"Food Added SuccessFully ",
            food,
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }

}

//get all food list
const listFood = async(req,res)=> {
    try {
        const  foods = await foodModel.find({});
        res.status(201).json({
            success:true,
            message:"All items fetch successfully",
            data:foods,
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message,
        })
    }

}

//delete 
const removeFood = async(req,res)=> {

    try {
        const productId = req.params.id;
        const food = await foodModel.findById(productId)
        if(!food){
            return( res.status(404).json({
                success: false,
                message: "Product not found",
              }))
        }
        fs.unlink(`uploads/${food.image}`,()=>{})

        await food.deleteOne();
        res.status(200).json({
            success: true,
            message: "Product delete successfullly ",            
        })

    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message,
        })
    }
}

export {
    addFood,
    listFood,
    removeFood,
}