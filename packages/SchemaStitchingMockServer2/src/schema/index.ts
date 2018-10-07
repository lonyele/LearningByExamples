export default `
    type Query {
        remoteWhat: String!
        testQuery: Whatup!
    }
    type Mutation {
        remoteHul: String!
    }
    type Whatup {
        name: String!
        payload: String!
      } 
`;