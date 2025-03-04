const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentID: {
        type: String, // dataType
        required: true, // validation
    },
    name: {
        type: String, // dataType
        required: true, // validation
    },
    email: {
        type: String, // dataType
        required: true, // validation
    },
    mobile: {
        type: Number, // dataType
        required: true, // validation
    },
    address: {
        type: String, // dataType
        required: true, // validation
    }
});

module.exports = mongoose.model(
    "student", // fileName
    studentSchema // functionName
)