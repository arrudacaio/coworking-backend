const MeetingModel = require('../models/MeetingModel')



module.exports = {

    async index(req,res) {
        const meeting = await MeetingModel.find()
        return res.json(meeting)
    },

    async create(req,res){
        const {name, description, room, hour, creator, participants} = req.body

        try {
            let meeting = await MeetingModel.findOne({name})
            
            if(!meeting){
                const data = {name:name, description: description, room: room, hour: hour,creator: creator, participants: participants}
                novo = MeetingModel.create(data)
                return res.status(200).json(novo)
            }
        } catch (error) {
            throw Error(`Error while editing a meeting: ${error}`)
        }
    
    },

    async update(req,res){
        try {
            const { _id, name, description, room, hour, creator, participants} = req.body
            const data = {name, description,  room, hour, creator, participants}

            
            const meeting = await MeetingModel.findByIdAndUpdate({_id}, data, {new: true})
            
            return res.json(meeting)
            
        } catch (error) {
            throw Error(`Error while editing a meeting: ${error}`)
            
        }
    },

    async details(req,res){
        const { _id } = req.params

        try {
            const meeting = await MeetingModel.findOne({_id})
            return res.json(meeting)
        } catch (error) {
            throw Error(`Error while searching details from meeting ${error}`)
            
        }
    },

    async delete(req, res){
        const { _id } = req.params

        try {
            const meeting = await MeetingModel.findByIdAndDelete({_id})
            
            return res.json(meeting)



        } catch (error) {
            throw Error(`Error while deleted meeting${error}`)
        }
        
    }
}