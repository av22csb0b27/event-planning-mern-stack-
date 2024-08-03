import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect("mongodb+srv://vaishnavanubhav20:vaishnavanubhav20@cluster0.ppt7zql.mongodb.net/Event_Message",{dbName: "Event_Message"}).then(()=>{
        console.log("Connected to database");
    }).catch(err=>{
        console.log("Some error occured while connecting to database");
    })
}
