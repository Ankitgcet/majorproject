const express= require("express");
const app= express();
const mongoose=require("mongoose");
const Listing = require("./models/listing.js");
const path= require("path");

const MONGO_URL="mongodb://127.0.0.1:27017/test";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log("err");
});

async function main(){
   await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res)=>{
    res.send("Hi i am root")
});

app.get("listings", async(req, res)=>{
    const allListing= await Listing.find({});
    res.render("listings/index.ejs",{allListing});   
});

//app.get("/testListing",async(req, res)=>{
   // let sampleListing=new Listing({
      //  title:"My new Villa",
      //  description:"By the beach",
      //  price:1200,
      //  location:"Colanguate, Goa",
      //  country:"India"
   // })
   // await sampleListing.save();
   // console.log("sample was saved");
   // res.send("testing successfull");
//});


app.get("/",(req, res)=>{
    res.send("hi i am");
});

app.listen(8080,()=>{
console.log("server is listen to port");
});