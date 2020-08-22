const assert = require('assert');
const User = require('../model/user');

describe('update record',()=>{
    let user;
    beforeEach(function(done){
        user=new User({
            name : "john",
            email: "jon@qs.com",
            password : 1223,
            purchaseHistory:''
        });

        user.save.then(()=>{done();});

    })
    it('it updates ',()=>{
         User.findOneAndUpdate({name : "john"},{name :"jack"}).then(()=>{
             User.findById({_id:user.id}).then((result)=>{
                 assert(result.name==='jack')
                 done();
             })
         })
    })
})