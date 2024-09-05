import mongoose from "mongoose";

export async function connect(){
   try {
      mongoose.connect(process.env.MONGO_URI!)
      const connection = mongoose.connection
      connection.on('connected',()=>{
         console.log('MongoDb connected')
      })

      connection.on('error', (err)=>{
        console.log("mongodb connection error, please make sure db is up and running" + err);
        process.exit();
      })
   } catch (error) {
     console.log('somthing went wrong in connecting to Db')
     console.log(error)
   }
}