const student = require("../model/student");

// function to display data
const getAllStudents = async (req, res, next) => {

    let students;

    // try to get all students
    try{
        students = await student.find()
    }
    catch(err){
        console.log(err);
    }

    // if no students - error msg
    if(!students){
        return res.status(404).json({message: "Error: Students not found!.."});
    }
    // else - success msg
    return res.status(200).json({students});
};


// function to insert data
const addStudents = async (req, res, next) => {

    const {studentID, name, email, mobile, address} = req.body;

    let students;

    // try to insert students
    try{
        students = new student({studentID, name, email, mobile, address})
        await students.save();
    }
    catch(err){
        console.log(err);
    }

    // if unable - error msg
    if(!students){
        return res.status(404).json({message: "Error: Unable to add the Student!.."});
    }
    // else - success msg
    return res.status(200).json({students});
};


//function to get students by id
const getStudentsById = async (req, res, next) => {

    const id = req.params.id;

    let students;

    // try to find the student by ID
    try{
        students = await student.findById(id);
    }
    catch(err){
        console.log(err);
    }

    // if unable - error msg
    if(!students){
        return res.status(404).json({message: "Error: Student not found!.."});
    }
    // else - success msg
    return res.status(200).json({students});
};


//function to update student
const updateStudents = async (req, res, next) => {

    const id = req.params.id;
    const {studentID, name, email, mobile, address} = req.body;

    let students;

    // try to update students
    try{
        students = await student.findByIdAndUpdate(id,
            {studentID : studentID, name : name, email : email, mobile : mobile, address : address}
        );
        students = await students.save(); 
    }
    catch(err){
        console.log(err);
    }

    // if unable - error msg
    if(!students){
        return res.status(404).json({message: "Error: Unable to update the Student!.."});
    }
    // else - success msg
    return res.status(200).json({students});
};


//function to delete students
const deleteStudents = async (req, res, next) => {

    const id = req.params.id;
  
    let students;

    // try to delete students
    try{
        students = await student.findByIdAndDelete(id);
    }
    catch(err){
        console.log(err);
    }

    // if unable - error msg
    if(!students){
        return res.status(404).json({message: "Error: Unable to delete the Student!.."});
    }
    // else - success msg
    return res.status(200).json({students});
};

exports.getAllStudents = getAllStudents;
exports.addStudents = addStudents;
exports.getStudentsById = getStudentsById;
exports.updateStudents = updateStudents;
exports.deleteStudents = deleteStudents;