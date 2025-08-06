const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true } );

// Encrypting the password before it gets saved into the database
UserSchema.pre('save',function(next) {
    const user= this;
    const SALT=bcrypt.genSaltSync(10);
    const encryptedPassword= bcrypt.hashSync(user.password, SALT);
    user.password=encryptedPassword;
    next();
});

const User= mongoose.model('User',UserSchema);
module.exports=User;