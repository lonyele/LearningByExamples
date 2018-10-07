import RootQuery from "./rootQuery";
import RootMutation from "./rootMutation";


const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export const typeDefs = [SchemaDefinition, RootQuery, RootMutation]
