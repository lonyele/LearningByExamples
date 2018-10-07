import { please } from './what'
const what: string = 'what is the... problem'
please('somebody')
console.log('??? what', what);

const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

import { schema } from './schema'
import { initArango } from "./arango";

// The GraphQL schema in string form

const arango = initArango();


// Initialize the app
const app = express();

// The GraphQL endpoint
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress((req: any) => {
    return {
      schema,
      context: {
        arango
      }
    }
  }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql to run queries!');
});