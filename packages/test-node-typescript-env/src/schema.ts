// Put together a schema
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from "./typeDefinitions/root/index";
import { resolvers } from "./resolvers/root/index";

console.log('typeDef', typeDefs)
console.log('resolvers', resolvers)
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
