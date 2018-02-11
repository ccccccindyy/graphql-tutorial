const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const schema = require('./schema');

app.listen(4000)

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}))

console.log('Listening...')
