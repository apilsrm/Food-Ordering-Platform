import mongoose from "mongoose";
const connectDB = async () => {
    const {connection} = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB is connected at : ${connection.host}`);
    
 
  };
  

  export default connectDB;