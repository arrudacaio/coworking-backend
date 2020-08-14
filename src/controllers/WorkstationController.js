const WorkstationModel = require('../models/WorkstationModel')



module.exports = {

    async index(req,res) {
        const workstation = await WorkstationModel.find()
        return res.json(workstation)
    },

    async create(req,res){
        const {name, description, schedules} = req.body

        try {
            const workstation = await WorkstationModel.findOne({name})

            if(!workstation){
                const data = {name: name, description: description, schedules: schedules}
                novo = await WorkstationModel.create(data)
                return res.status(200).json(novo)
            }
        } catch (error) {
            throw Error(`Error while registering a new workstation: ${error}`)
            
        }
    },

    async update(req,res){
        try {
            const { _id, name, description, schedules} = req.body
            const data = {name, description, schedules}

            
            const workstation = await WorkstationModel.findByIdAndUpdate({_id}, data, {new: true})
            
            return res.json(workstation)
            
        } catch (error) {
            throw Error(`Error while editing a workstation: ${error}`)
            
        }
    },

    async details(req,res){
        const { _id } = req.params

        try {
            const workstation = await WorkstationModel.findOne({_id})
            return res.json(workstation)
        } catch (error) {
            throw Error(`Error while searching details from workstation ${error}`)
            
        }
    },

    async delete(req, res){
        const { _id } = req.params

        try {
            const workstation = await WorkstationModel.findByIdAndDelete({_id})
            
            return res.json(workstation)



        } catch (error) {
            throw Error(`Error while deleted user${error}`)
        }
        
    }
}