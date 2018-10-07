"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"); // https://stackoverflow.com/questions/34520288/nodejs-typescript-unclear-syntax-with-type-script-compiled-code/34522813#34522813
const bodyParser = require("body-parser"); // ㅉㅉㅉ  이렇게 아니면 var bodyParser = require('body-parser') 이걸로 해야함. 아니면 import path = require('path');
const apollo_server_1 = require("apollo-server");
var { makeExecutableSchema, mergeSchemas, addMockFunctionsToSchema } = require('graphql-tools');
const index_1 = require("./schema/index");
const resolvers_1 = require("./schema/resolvers");
const GRAPHQL_PORT = 7500;
const graphQLServer = express();
const executableSchema = makeExecutableSchema({
    typeDefs: index_1.default,
    resolvers: resolvers_1.default,
});
// `context` must be an object and can't be undefined when using connectors
graphQLServer.use('/graphql', bodyParser.json(), apollo_server_1.apolloExpress(req => ({
    schema: executableSchema,
    context: {
        body: req.body,
        req,
    },
})));
graphQLServer.use('/graphiql', apollo_server_1.graphiqlExpress({
    endpointURL: '/graphql',
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(`Apollo Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`));
//# sourceMappingURL=index.js.map