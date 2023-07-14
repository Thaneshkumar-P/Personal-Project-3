import express from 'express'
import mongoose from 'mongoose'
const app = express()
import SliderModel from './models/CarouselMainModel.js'
import 'dotenv/config.js'

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_DB,
    { useNewUrlParser: true }
)
.then(()=>{
    console.log("Connected to MongoDB")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
