import mongoose from "mongoose"

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "Restaurant"
    }).then(()=>{
        console.log("Connected to database successfully!")
    }).catch(err =>{
        console.log("Error connecting to database: ", err)
    })
}