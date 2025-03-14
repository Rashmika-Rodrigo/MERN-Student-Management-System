const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/studentRouter");

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/students", router);

mongoose.connect("mongodb+srv://admin:SwYFJCFEo8A9aFri@cluster0.4oxvl.mongodb.net/") // pass: SwYFJCFEo8A9aFri
.then(() => console.log("Connected to mongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));


// register
require("./model/admin");
const user = mongoose.model("admin");
app.post("/register", async(req, res) => {
    const {name, username, password, repassword} = req.body;
    try{
        await user.create({
            name,
            username,
            password,
            repassword
        })
        res.send({status:"ok"});
    }
    catch(err){
        res.send({status:"err"});
    }
})

// login
app.post("/login", async (req, res) => {
    const {username, password} = req.body;
      try{
        const admin = await user.findOne({username});
        if(!admin){
            return res.json({status: "User not found !"});
        }
        if(admin.password === password){
            return res.json({status: "ok"});
        }
        else{
            return res.json({status: "Incorrect password !"});
        }
      }
      catch(err){
        console.error(err);
        res.status(500).json({err: "Server error !"})
      }
});
