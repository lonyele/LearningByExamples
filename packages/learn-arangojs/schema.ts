import { SchemaDefinition } from "./schemaDefinition/index";
import { RootQuery } from "./schemaDefinition/rootQuery";
import { makeExecutableSchema } from 'graphql-tools';

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery],
  resolvers: {},
});