const mongoose = require('mongoose')


const MeetingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    room: {
        type: Number,
        required: true

    },
    hour: {
        type: String,
        required: true

    },
    creator: {
        type: String,
        required: true

    },
    participants: {
        type: Array, 
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('MeetingModel', MeetingSchema)