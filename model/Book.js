const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    // id: {
    //     type: String
    // },
    name: {
        type: String
    },
    genre: {
        type: String
    },
    authorId: {
        type: String
    }
})

module.exports = mongoose.model('book', BookSchema)
