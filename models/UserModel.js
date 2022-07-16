const mongoose=require("mongoose")
const Schema=mongoose.Schema
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const UserSchema=new Schema({
    email:{
        type:String,
        required:[true,"enter email ! email is mandatory"],
        unique:true,
        validate:{
            validator:function(exp){
            return /[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$/.test(exp)
            },
            message:property=>`${property.value} is not valid` 
        }
    },
    password:{
        type:String,
        required:true,  
    },
    phone:{
        type:Number
    },
    age:{
        type:Number,
        min:[18,"age is less than 18"],
        max:[50,"age should not be greater than 50"]
    },
    role:{
        type:String,
        enum:{
            values:['admin','trainer','trainee'],
            message:'{VALUE} is not a valid role'
        }
    },
    username:{
        type:String,
        minlength:[6,"minlength of username should be 6"],
        maxlength:[10,"minlength of username should be 10"],
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    address:{
        type:String
    }

})

//customs,writing functions on schema
//like if we want to concetenate country and pincode

UserSchema.methods.signUp=async function(){
    return await this.save()
 }//creating records inside model using object here "usermodel"

 UserSchema.statics.signInStatics=async function(data){
    const user=await UserModel.findOne({email:data.email})
       if(user){
       const comparison=await bcrypt.compare(data.password,user.password)
       if(comparison){
        const generatedtoken=jwt.sign({email:data.email},'jamesbond',{expiresIn:'1h',algorithm:'HS512'})//generation of token 
        console.log(generatedtoken)
        return {msg:"login successfull",status:true,token:generatedtoken,statusCode:200}
       }
       else{
        return {msg:"login is not successfull,check your password",status:false,statusCode:404}
       }}
       else{
       return {msg:"email does not exist,please check you mail",status:false,statusCode:400}
       }

 }


const UserModel=mongoose.model("UserModel",UserSchema)


module.exports=UserModel