"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = require("body-parser");
const apollo_server_express_1 = require("apollo-server-express");
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
const schema_1 = require("./schema");
// Initialize the app
const app = express_1.default();
// The GraphQL endpoint
app.use('/graphql', body_parser_1.default.json(), apollo_server_express_1.graphqlExpress({ schema: schema_1.default }));
// GraphiQL, a visual editor for queries
app.use('/graphiql', apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' }));
// Start the server
app.listen(3500, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});
//# sourceMappingURL=index.js.map