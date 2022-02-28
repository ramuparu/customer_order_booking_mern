import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true
    },
    numberOfPages:{
        type:Number,
        require:true
    },
    publisher:{
        type:String,
        require:true
    }
})

const bookModel = mongoose.model('book',bookSchema)

export default bookModel