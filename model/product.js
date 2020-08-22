const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const CategorySchema = new Schema({
    categoryName : String
})

const ProductSchema = new Schema({
    productName : String,
    description : String,
    price : Number,
    quantity : Number,
    category :[CategorySchema]
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;