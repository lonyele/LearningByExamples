import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

// // Some fake data
// const books = [
//   {
//     title: "Harry Potter and the Sorcerer's stone",
//     author: 'J.K. Rowling',
//   },
//   {
//     title: 'Jurassic Park',
//     author: 'Michael Crichton',
//   },
// ];

// // The GraphQL schema in string form
// const typeDefs = `
//   type Query { books: [Book] }
//   type Book { 
//     id: String,
//     name: String,
//     color: String,
//     isSet: Boolean,
//     title: String,
//     author: String
//   }
// `;

// // The resolvers
// const resolvers = {
//   Query: { books: () => books },
// };

// // Put together a schema
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });
import schema from "./schema";
// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3500, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});