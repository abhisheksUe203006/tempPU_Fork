import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema(
    {
        UserId:{
            type:String,
            require:true
        },
        department:{
            type:String,
            require:true
        },
        assignDate:{
           type:String ,
        },
        completionDate:{
            type:String,
        },
        status:{
            type:String,
            default : "Pending"
        },
        workerId:{
            type:String,
            default : "Pending"
        },
        helperId:{
            type:String,
            default : "Pending"
        },
        mobile : {
            type : String,
            required:true
        },
        address  : {
            type : String,
            required:true,
            max:50
        }, 
        details : {
            type : String,
            required:true,
            max:100,
        },
        remarks : {
            type : String,
            max:100,
        },
    },
    {timestamps:true}
);
const Task = mongoose.model("Task",TaskSchema);

export default Task;