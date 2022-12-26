import mongoose from "mongoose";
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);

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
        type: String,
        default: date
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