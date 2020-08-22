const assert = require('assert');
const Product = require('../model/product');

describe('update record',()=>{
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
    it('it updates ',()=>{
         User.findOneAndUpdate({productname : "rice"},{name :"wheat"}).then(()=>{
             User.findById({_id:user.id}).then((result)=>{
                 assert(result.name==='wheat')
                 done();
             })
         })
    })
})