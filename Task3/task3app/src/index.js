const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')

const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Mutation {
    post(url: String!, description: String!): Link!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`
// 1
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

// 3


server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
