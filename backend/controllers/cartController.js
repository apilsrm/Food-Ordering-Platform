import userModel from "../models/userModel.js";

//add product to cart

const addToCart = async (req, res) => {
  try {
    // let userData = await userModel.findOne({ _id: req.body.userId }); //same
    let userData = await userModel.findOne(req.body.userId); //same
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({
      success: true,
      message: "Added To Cart",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error while adding to cart",
    });
  }
};

//remove from cart

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({
      success: true,
      message: "Item Removed Form Cart",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error while removing",
    });
  }
};

//fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({
      success: true,
      cartData,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error while getting items",
    });
  }
};

export { addToCart, removeFromCart, getCart };
