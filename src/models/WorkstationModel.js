const mongoose = require('mongoose')


const WorkstationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    schedules: {
        type: Array, 
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('WorkstationModel', WorkstationSchema)