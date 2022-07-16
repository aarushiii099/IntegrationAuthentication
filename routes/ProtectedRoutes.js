const express=require("express")
const router=express.Router()
const UserModel=require("../models/UserModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { findOneAndUpdate } = require("../models/UserModel")

router.post("/updatepassword",authorize,async (req,res)=>{
    // const token="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbnJ5QGdtYWlsLmNvbSIsImlhdCI6MTY1NzYxMDE4OCwiZXhwIjoxNjU3NjEzNzg4fQ.9ECjuvQXv4Y2FvIs1Lq_GfapKX3XosHmyjlESHnUYj11HcZkNhxmC11Gmlu_5yYFc9B8idJV9pzsFrzRpgLj1Q"
    // const verifiedtoken=jwt.verify(token,'jamesbond')//'jamesbond is the primary key we set in the beginning.


    // console.log(verifiedtoken)
    //copy the token generated when you sign in and paste it in postman -> authorization-> bearer token -> token
    //now you can access it thru headers
    // console.log(req.headers['authorization'])
    const data=req.body
    try{
        let reqheader=req.headers['authorization']
        const token=reqheader.replace("Bearer ",'')
        console.log(token)

        const verifiedtoken=jwt.verify(token,'jamesbond')
        console.log(verifiedtoken)


        const hasedpassword=await bcrypt.hash(data.upassword,5)
        const updated=await UserModel.findOneAndUpdate({email:req.token.email},{password:hasedpassword})
        if(updated){
            res.status(201).send({msg:"updated successfully",status:true})

        }
        else{
            res.status(404).send({msg:"update unsuccessful",status:false})
        }
    
        


    }
    catch(err){
        res.send("updated err")

    }
})

function authorize(req,res,next){
    try{
        let reqheader=req.headers['authorization']
        const token=reqheader.replace("Bearer ",'')
        console.log(token)

        const verifiedtoken=jwt.verify(token,'jamesbond')
        req.token=verifiedtoken
        next()
        return
    }
    catch(err){
       res.send({msg:"you are not authorized",status:false}) 
    }

}//middlewear

module.exports=router