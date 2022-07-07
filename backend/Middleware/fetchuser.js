import jwt from "jsonwebtoken";
const JWT_SECRET="shopforhomebyajandshashi";

export const fetchuser=(req,res,next)=>{
const authorization = req.headers.authorization;
if(!authorization){
    res.status(401).send({error:"Please Authenticate"})
}
try {
    const data=jwt.verify(authorization,JWT_SECRET);
req.user=data.user;
next();
} catch (error) {
    res.status(401).send({error:"Please Authenticate"})
}}
