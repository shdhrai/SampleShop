import jwt from "jsonwebtoken";
const JWT_SECRET="shopforhomebyajandshashi";

export const fetchadmin=(req,res,next)=>{
const token=req.header("auth-token");
if(!token){
    res.status(401).send({error:"Please Authenticate"})
}
try {
    const data=jwt.verify(token,JWT_SECRET);
req.admin=data.admin;
next();
} catch (error) {
    res.status(401).send({error:"Please Authenticate"})
}}

