import mongoose from "mongoose";

const CarouselMain = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    ranking: {
        type: Number,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
})

export default mongoose.model('SliderModel', CarouselMain);