const mongoose = require('mongoose')

const TodosSchema = new mongoose.Schema({
    username: String,
    todos : [{
        name : String,
        notes : String
    }]
    
})

const Todos = mongoose.model('Todos', TodosSchema, 'todos')

module.exports = Todos