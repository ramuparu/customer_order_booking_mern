import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
   
})

const customerModel = mongoose.model('customer',customerSchema)

export default customerModel