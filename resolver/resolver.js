const {books, authors} = require('../data/static')
const Author = require('../model/Author')
const Book = require('../model/Book')
const mongoose = require('mongoose');
const mongoDataMethods = require("../data/db");

const resolvers = {
    // Query
    Query: {
        books: async (parent, args, context) => {
            console.log(context)
            return await context.mongoDataMethods.getAllBooks();
        },
        book: async (parent, args, context) => {
            console.log(await context.mongoDataMethods.getOneBook(args.id))
            return await context.mongoDataMethods.getOneBook(args.id)
        },
        authors: async (parent, args, context) => {
            return await context.mongoDataMethods.getAllAuthors();
        },
        author: async (parent, args, context) => {
            return await context.mongoDataMethods.getOneAuthor(args.id);
        }
    },

    // Mutation
    Mutation: {
        createAuthor: async (parent, args, context) => {
            return await context.mongoDataMethods.createAuthor(args)
        },
        createBook: async (parent, args, context) => {
            return await context.mongoDataMethods.createBook(args)
        }
    },

    // Relations
    Book: {
        author: async (parent, args, context) => {
            return await context.mongoDataMethods.getOneAuthor(parent.authorId)
        }
    },
    Author: {
        books: async (parent, args, context) => {
            return await context.mongoDataMethods.getBooks(parent.id)
        }
    },
}

module.exports = resolvers
