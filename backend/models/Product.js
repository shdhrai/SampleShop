import mongoose from'mongoose';
const {Schema} = mongoose;

const reviewSchema=new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default:0
    },
    comment: {
        type: String,
        required: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    }
})

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    reviews:[reviewSchema],
    rating: {
        type: Number,
        required: true,
        default:0
    },
    numReviews: {
        type: Number,
        required: true,
        default:0
    },
    price: {
        type: Number,
        required: true,
        default:0
    },
    countInStock: {
        type: Number,
        required: true,
        default:0
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const Product  = mongoose.model('product', ProductSchema);

export default Product;
