import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id:{
        type:String
    },
    description:{
        type:String
    },
    isChecked:{
        type: Boolean
    },
    created:{
        type: Date
    }
});

module.exports = mongoose.model('task', taskSchema)