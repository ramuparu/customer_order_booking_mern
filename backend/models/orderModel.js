import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    customerId:{
        type:mongoose.SchemaTypes.ObjectId,
        require:true,
    },
    bookId:{
        type:mongoose.SchemaTypes.ObjectId,
        require:true
    },
    initialDate:{
        type:Date,
        require:true
    },
    deliveryDate:{
        type:Date,
        require:false
    }
})

const orderModel = mongoose.model('order',orderSchema)

export default orderModel