const jwt=require("jsonwebtoken")
const auth=(req,res,next)=>{
    const authHeader=req.headers["authorization"]
    const token=authHeader & authHeader.split(" ")[1];
    if(!token){
        return res.status(200).send("Not Authorized")
    }
    jwt.verify(token,process.env.SECRET_KEY,(error,decoded)=>{
        if(error){
            return res.status(201).send(error.message)
        }
        req.user=decoded
        next();
    })
    
}
module.exports=auth