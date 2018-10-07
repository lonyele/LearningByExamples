export default `
    type Query {
        remoteWhat: String!
        testQuery: Whatup!
    }
    type Mutation {
        remoteHul(type: String!): String!
    }
    type Whatup {
        name: String!
        payload: String!
      } 
`;