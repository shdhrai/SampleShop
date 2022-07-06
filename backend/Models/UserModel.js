import mongoose from'mongoose';
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required:true,
        default: false,
    },
<<<<<<< HEAD:backend/models/User.js
    date: {
        type: Date,
        timestamps:true,
        default: Date.now
    }    
});
const User = mongoose.model('user', UserSchema);
=======
},
{
    timestamps:true,
}
);

module.exports  = mongoose.model('user', UserSchema);
>>>>>>> f0b11e403b1947dff7f0b6775a8bf3b9f5e09733:backend/Models/UserModel.js

export default User;
