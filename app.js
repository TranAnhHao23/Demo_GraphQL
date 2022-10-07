const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const mongoose = require('mongoose')

const typeDefs = require('../Demo_GraphQL/schema/schema')
const resolvers = require('../Demo_GraphQL/resolver/resolver')

const mongoDataMethods = require('./data/db')

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/TutorialGraphQL',
            {
                // useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useFindAndModify: false
            }
        )

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        mongoDataMethods
    })
})


const app = express();
server.start().then(res => {
    server.applyMiddleware({app});
    app.listen({port: 4000}, () => {
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    })
})

