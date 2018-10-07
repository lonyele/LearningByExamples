export default `
    type Query {
        auth: String!
    }
    type Mutation {
        auth1(name: String!): String!
        createUserByFacebookStrategy(name: String!): String!
        logInUserByFacebookStrategy(name: String!): String!
        createUserByLocalStrategy(user: UserInput!): User!
        logInUserByLocalStrategy(user: UserInput!): User!
    }
    type User {
        id: ID!
        displayName: String!
        email: String!
        password: ID!
      }
  
      input UserInput {
        id: ID!
        displayName: String!
        email: String!
        password: ID!
      }
      
      input LocalAuthInput {
          email: String!
          password: String!
          subscription: String!
          mode: String!
      }
      
      union LocalAuthOutput = LocalAuthOutputSuccess | UserEmailAlreadyExisted
         
      type LocalAuthOutputSuccess {
          id: ID!
          token: ID!
          email: String!
          subscription: String!
          mode: String!
          message: String!
      }
      type UserEmailAlreadyExisted {
          message: String!
      }
`;