const assert = require('assert');
const Product = require('../model/product');
const  mongoose  = require('mongoose');


describe('test',()=>{
    beforeEach(()=>{
        mongoose.connection.collections.product.drop(()=>{
            done();
        });
    });
    it('it creates product',done=>{
        let newProduct = new Product({
            productName : 'rice',
            description :'dawat basmati rice',
            price :  1290 ,
            quantity : 5,
            category : [
                {categoryName : 'food'}
            ] 
        })
        newProduct.save().then(data=>{
            Product.findOne({productName : 'rice'}).then(category=>{
                assert(category);
            })
        })
    })
})