import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// import Stripe from "stripe"
import CryptoJS from "crypto-js"


// const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
//placing the user order for frontend
// const placeOrder = async(req,res) => {

//     const frontend_url =  "http://localhost:5173"
//     try {
//         const  newOrder = new orderModel({
//             userId:req.body.userId,
//             items:req.body.items,
//             amount:req.body.amount,
//             address:req.body.address

//         })
//         //save to db
//         await newOrder.save();
//         //clean userCartdata
//         await userModel.findByIdAndUpdate(req.body.userId,{cartDara:{}});

//      //for strike payment
//         const line_items = req.body.items.map((item)=>({
//             price_data:{
//                 currency:"usd",
//                 product_data:{
//                     name:item.name
//                 },
//                 unit_amount:item.price*100
//             },
//             quantity:item.quantity
//         }))

//         line_items.push({
//             price_data:{
//                 currency:"usd",
//                 product_data:{
//                     name:"Delivery Charge"
//                 },
//                 unit_amount:50*100
//             },
//             quantity:1
//         })

//         //create seesionusing line_items
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types:["card"],
//             line_items:line_items,
//             mode:'payment',
//             success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//         })

//         res.status(200).json({
//             success: true,
//             session_url:session.url
//         })

//     } catch (error) {

//         console.log("place order",error)
//         res.status(500).json({
//             success:false,
//             message:"Error while place order"
//         })
//     }

// }

const createSignature = (message) => {
  const secret = "8gBm/:&EnhH.1/q";
  //cretae hmac hsah
  const hash = CryptoJS.HmacSHA256(message, secret);
 

  
  // Get hash in Base64 format
  const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
  return hashInBase64;
};

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    //save to db
    await newOrder.save();
    // console.log("newOrder",newOrder)
   
    
    const signature = createSignature(
      `total_amount=${newOrder.amount},transaction_uuid=${newOrder._id},product_code=EPAYTEST`
    );
    // console.log("Signature",signature);
    
    //clean userCartdata
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

      // console.log("UserId  ",req.body.userId)
    const formData = {
      amount: newOrder.amount,
      failure_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
      product_delivery_charge: "50",
      product_service_charge: "0",
      product_code: "EPAYTEST",
      signature: signature,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      tax_amount: "0",
      total_amount: newOrder.amount,
      transaction_uuid: newOrder._id,
    };

    res.status(201).json({
      success: true,
      message: "Order Create Successfully",
      newOrder,
      formData,
    });
  } catch (error) {
    console.log("Place order error:: ", error);
    res.status(500).json({
      success: false,
      message: "Error while place order",
    });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({
        success: true,
        message: "Paid",
      });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({
        success: false,
        message: "Not Paid",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

//user orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

//listing orders for admin panel 
const listOrders = async (req,res)=> {
    try {
        const orders = await orderModel.find({});
        res.json({
          success:true,
          data:orders
        })
    } catch (error) {
      console.log(error)
      res.json({
        success:false,
        message:"Error"
      })
      
    }
}


//for order status
const updateStatus = async(req,res)=>{
   try {
     await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
     res.json({
      success:true,
      message:"Status Updated"
     })
   } catch (error) {
     console.log(error);
     res.json({
      success:false,
      message:"Error"
     })
   }
}


export { placeOrder, verifyOrder, userOrders, createSignature , listOrders, updateStatus};
