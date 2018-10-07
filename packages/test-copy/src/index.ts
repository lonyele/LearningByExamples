const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

import { schema } from "./schema";
import { initMongo } from "./mongodb/mongo";

const mongo = initMongo();
const app = express();

// The GraphQL endpoint
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress((req: any) => {
    return {
      schema,
      context: {
        mongo
      }
    };
  })
);

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen(4000, () => {
  console.log("Go to http://localhost:4000/graphiql to run queries!");
});
