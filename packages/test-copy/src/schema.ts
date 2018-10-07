// Put together a schema
import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from "./typeDefinitions/root/index";
import { resolvers } from "./resolvers/root/index";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
