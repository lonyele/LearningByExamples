
export default {
  Query: {
    remoteWhat: async (root: any, data: any, context: any, info: any) => {
      console.log("remoteWhat~~~~~~~~");
      return "mockServer2 response from remoteWhat~~~~ ";
    },
    testQuery: async (root: any, data: any, context: any, info: any) => {
      console.log("testQuery~~~~~~~~");
      return "mockServer2 response from remoteWhat~~~~ ";
    },
  },
  Mutation: {
    remoteHul: async (root: any, data: any, context: any) => {
      console.log("remoteHul~~~~~~~~");
      return "mockServer2 response from remoteHul~~~~~";

    } 
  },
  Whatup: {
    name: () => {
      return "mockServer2  name????"
    },
    payload: () => {
      return "mockServer2payload???"
    }
  }
};