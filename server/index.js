const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')

const User = require('./models/user')
const Todos = require('./models/todos')

const app = express()

app.use(session({
    secret: 'asjoifusdauihdashuisdainfijnjignbuisdfuhasdifnnsaddhfhjsji',
    saveUninitialized: false,
    resave: false
}))

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
        req.session.user = username
        req.session.save()
        res.json({
            loggedIn: true,
        })
    }

})

app.post('/api/register', async (req,res) => {
    const {username, password} = req.body

    const exists = await User.findOne({username})

    if(exists){
        res.json({
            success: false,
            message: "User already exists"
        })
    }else{
        const user = new User({
            username,
            password
        })

        const result = await user.save(user)

        console.log(result)

        res.json({
            success: true,
            message: "Account created"
        })
    }

})

app.get('/api/isLoggedIn', (req,res) => {
    res.json({
      status: !!req.session.user
    })
  })

  app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.json({
        success: true
    })
})

app.get('/api/hasTodos', async (req, res) => {
    const username = req.session.user

    const todo = await Todos.findOne({username})

    if(todo){
        res.json({
            exist: true
        })
    }else{
        res.json({
            exist: false
        })
    }
})

app.post('/api/createTodos', async (req, res) => {//create todos collection
    const username = req.session.user
    const exists = await Todos.findOne({username})

    console.log(exists);

    if(exists){
        res.json({
            success: false,
            message: "User already exists"
        })
    }else{
        const newTodo = new Todos({
            username: username,
            todos: []
        })

        const result = await newTodo.save(newTodo)

        res.json({
            success:true,
            message: "Todos collection successfully created"
        })
    }
})

app.get('/api/getTodos', async (req, res) => {
    const username = req.session.user

    const collection = await Todos.findOne({username})

    res.json({
        todos: collection.todos
    })
})

app.post('/api/createTodo', async (req, res) => {
    const username = req.session.user
    const {todo} = req.body

    const collection = await Todos.findOne({username})

    console.log(username);

    collection.todos.push(todo);
    collection.save();

    res.json({
        success: true
    })

})//might be bug with getting name from session

app.listen(1234, () => {
    console.log("Server started at 1234")
})
