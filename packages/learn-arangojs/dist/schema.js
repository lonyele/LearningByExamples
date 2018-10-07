"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./schemaDefinition/index");
const rootQuery_1 = require("./schemaDefinition/rootQuery");
const graphql_tools_1 = require("graphql-tools");
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: [index_1.SchemaDefinition, rootQuery_1.RootQuery],
    resolvers: {},
});
//# sourceMappingURL=schema.js.map