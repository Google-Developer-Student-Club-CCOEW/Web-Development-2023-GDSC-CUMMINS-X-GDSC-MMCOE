const jwt=require("jsonwebtoken")
const createToken=(payload)=>{
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'500s'})
}
module.exports=createToken




