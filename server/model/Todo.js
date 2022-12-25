import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required:true 
    },
    active:{
            type:Boolean,
            default:false
        },
    pending:{
            type:Boolean,
            default:true
        },
    createdAt: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    },
    to:String,
    by:String,
    delete:{
        type:Boolean,
        default:false
    }

});

const todo = mongoose.model('todo', TodoSchema);

export default todo;