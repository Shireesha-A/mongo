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
    it('it deletes ',done=>{
        User.findOneAndDelete({name:'john'}).then(data=>{
            User.findOne({name:'john'}).then(result=>{
                assert( result === null);
                done;
            })
        })
    })
})