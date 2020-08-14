const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./src/routes')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')



const app = express()
app.use(express.json()) 
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}



try {
    mongoose.connect(process.env.MONGO_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    console.log('MongoDB was connected')
} catch (error) {
    console.log(error)
}





app.use(routes)

app.listen(process.env.PORT || 5000)