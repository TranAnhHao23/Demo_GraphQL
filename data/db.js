const Book = require('../model/Book')
const Author = require('../model/Author')

const mongoDataMethods = {
    getAllBooks: async () => {
       return Book.find();
    },

    getOneBook: async (id) => {
        return Book.findById(id);
    },

    createBook: async (args) => {
        let book = new Book(args)
        return await book.save();
    },

    getBooks: async (id) => {
        return Book.find({authorId: id})
    },

    getAllAuthors: async () => {
        return Author.find();
    },

    getOneAuthor: async (id) => {
        return await Author.findById(id).exec();
    },

    createAuthor: async (args) => {
        let author = new Author(args)
        return await author.save();
    }
}

module.exports = mongoDataMethods;
