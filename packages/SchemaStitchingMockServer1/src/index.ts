import * as express from 'express'; // https://stackoverflow.com/questions/34520288/nodejs-typescript-unclear-syntax-with-type-script-compiled-code/34522813#34522813
import * as bodyParser from 'body-parser'; // ㅉㅉㅉ  이렇게 아니면 var bodyParser = require('body-parser') 이걸로 해야함. 아니면 import path = require('path');

import { apolloExpress, graphiqlExpress } from 'apollo-server';
var { makeExecutableSchema, mergeSchemas, addMockFunctionsToSchema } = require('graphql-tools');
import Schema from './schema/index';
import Resolvers from './schema/resolvers';


const GRAPHQL_PORT = 6500;
const graphQLServer = express();
const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

// `context` must be an object and can't be undefined when using connectors
graphQLServer.use('/graphql', bodyParser.json(), apolloExpress(req => {
  console.log("~~req~~body", req.body, ",headers?", req.headers);
  
  return {
    schema: executableSchema,
    context: {
      body: req.body,
      req,
    }, //at least(!) an empty object
  }
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `Apollo Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
