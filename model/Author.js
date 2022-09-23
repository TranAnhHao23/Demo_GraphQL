const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    // id: {
    //     type: String
    // },
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model('author', AuthorSchema)
