import express from 'express'

import dotenv from 'dotenv'



import mongoose from 'mongoose'

import bookModel from './models/bookModel.js'
import customerModel from './models/customerModel.js'
import orderModel from './models/orderModel.js'


const dot = dotenv.config()
const PORT = process.env.PORT 

const app = express()



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(()=> console.log('Database connected')).catch((error)=>console.log(error))

app.use(express.json()) 

app.post('/book',async (req,res)=>{
    const bookAdded = new bookModel({...req.body})
    await bookAdded.save().then(response=>
        res.send('book added successfully')).catch(err=>
            res.status(500).send('internal server error'))
})

app.get('/books', async (req,res)=>{
    await bookModel.find().then(books=>{
        if (books.length!==0){
            res.json(books)
        }else{
            res.status(400).send('books not found')
        }
    }
        ).catch(err=>{
            res.status(500).send('internal server error')
        })
})

app.get('/books/:id', async (req,res)=>{
    await bookModel.findById(req.params.id).then(book=>{
        if (book){
            res.json(book)
        }else{
            res.status(400).send('book not found')
        }
    }
        ).catch(err=>{
            res.status(500).send('internal server error')
        })
})

app.delete('/books/:id', async (req,res)=>{
    await bookModel.findOneAndRemove(req.params.id).then(book=>{
        if (book){
            res.json('book deleted successfully')
        }else{
            res.status(400).send('book not found')
        }
    }
        ).catch(err=>{
            res.status(500).send('internal server error')
        })
})


app.listen(PORT,()=>{
    console.log(`Server Running At ${PORT}`)
})