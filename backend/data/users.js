import bcrypt from 'bcryptjs';


const users=[
    {
        name:"Admin",
        email:"admin@shopforhome.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true,
    },
    {
        name:"User",
        email:"user@shopforhome.com",
        password:bcrypt.hashSync("asdf",10),
    },
   ];
   export default users;