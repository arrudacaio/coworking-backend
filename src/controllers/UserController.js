const UserModel = require('../models/UserModel')
const checkPassword = require('../utils/checkPassword')
const checkEmail = require('../utils/checkEmail')
const bcrypt = require('bcrypt')

module.exports = {

    async index(req,res){
        const user = await UserModel.find()

        return res.json(user)
    },




    async update(req,res){ // Vai pedir os dados novos (rua, cpf etc) PAGINA DE EDIÇÃO DE INFO
        try {
            const { _id, name, email, isAdmin, date, cpf, street, bio} = req.body
            const data = {name, email, isAdmin, date, cpf, street, bio}

            
            const user = await UserModel.findByIdAndUpdate({_id}, data, {new: true})
            
            return res.json(user)
            
        } catch (error) {
            throw Error(`Error while editing a user: ${error}`)
            
        }
    },


    async create(req, res){
        try {
            const {name, email, isAdmin, password} = req.body
            const existentUser = await UserModel.findOne({email})

            if(!existentUser && checkPassword(password) && checkEmail(email)) {
                const hashedPassword = await bcrypt.hash(password, 10)
                const user = await UserModel.create({
                    name, email, isAdmin, password: hashedPassword
                })

                return res.status(200).json(user)
            }

            return res.status(400).json({
                message: 'email/user already exist'
            })
        } catch (error) {
            throw Error(`Error while registering a new user: ${error}`)
        }
    },

    async details(req,res){
        const { _id } = req.params
        

        try {
            const user = await UserModel.findOne({ _id })

            return res.json(user)
        } catch (error) {
            throw Error(`Error while searching details from user ${error}`)
        }
    },

    async delete(req, res){
        const { _id } = req.params

        try {
            const user = await UserModel.findByIdAndDelete({_id, isAdmin: false}, (err,result) => {
                if(err){
                    res.send(err)
                } 
            })
            
            return res.json({msg: 'was deleted'})



        } catch (error) {
            throw Error(`Error while deleted user${error}`)
        }
        
    },

 
}