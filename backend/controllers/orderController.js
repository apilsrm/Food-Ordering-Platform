import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import { Stripe } from "stripe"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)



//placing the user order for frontend
const placeOrder = async(req,res) => {

    const frontend_url =  "http://localhost:5173"
    try {
        const  newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,

        })
        //save to db
        await newOrder.save();
        //clean userCartdata
        await userModel.findByIdAndUpdate(req.body.userId,{cartDara:{}});

     //for strike payment 
        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"npr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*1*133
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"npr",
                product_data:{
                    name:"Delivery Charge"
                },
                unit_amount:50*100
            },
            quantity:1
        })


        //create seesionusing line_items

        const session = await stripe.Checkout.session.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })

        res.status(200).json({
            success: true,
            session_url:session.url,            
        })

    } catch (error) {
        
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Error while place order"
        })
    }

}

export { placeOrder};