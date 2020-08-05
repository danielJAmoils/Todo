const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const User = require('./models/user')

const app = express()

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/todoDB')
.then(() => console.log('Mongoose up'))

app.use(bodyParser.json())



app.post('/api/login', async (req, res) => {
    const {username, password} = req.body

    const user = await User.findOne({username, password})

    if(!user){
        res.json({
            loggedIn: false,
            message: "Incorrect details"
        })
    }else{
        //log user in
        res.json({
            loggedIn: true,
        })
    }

})



app.listen(1234, () => {
    console.log("Server started at 1234")
})
