const assert = require('assert');
const Product = require('../model/product');

describe('deletes record',()=>{
    let product;
    beforeEach(function(done){
        product=new Product({
            productname:'rice',
            description :'dawat basmati rice',
              price :  1290 ,
              quantity : 5,
              category : [
                  {categoryName : 'food'}
              ] 
        });

        product.save.then(()=>{done();});
    })
    it('it deletes ',done=>{
        User.findOneAndDelete({productname:'rice'}).then(data=>{
            User.findOne({productname:'rice'}).then(result=>{
                assert( result === null);
                done;
            })
        })
    })
})