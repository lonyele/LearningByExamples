"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
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
//# sourceMappingURL=index.js.map