const mongoose = require('mongoose')
/**onst ROLE =  {
    ADMIN: 'admin',
    BASIC: 'basic'
}*/

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }, 
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isValidate: {
        type: Boolean, 
        default: false
    },
    date: {
        type: String,
    },
    cpf: {
        type: String
    },
    street: {
        type: String
    },
    bio: {
        type: String
    }


    

}, {
    timestamps: true
})

module.exports = mongoose.model('UserModel', UserSchema)