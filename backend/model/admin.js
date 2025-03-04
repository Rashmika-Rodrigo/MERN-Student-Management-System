const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  
    name: {
        type: String, // dataType
        required: true, // validation
    },
    username: {
        type: String, // dataType
        required: true, // validation
    },
    password: {
        type: String, // dataType
        required: true, // validation
    },
    repassword: {
        type: String, // dataType
        required: true, // validation
    }
});

module.exports = mongoose.model(
    "admin", // fileName
    adminSchema // functionName
)