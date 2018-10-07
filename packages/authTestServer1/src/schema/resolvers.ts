
export default {
  Query: {
    auth: async (root: any, data: any, context: any) => {
      console.log("auth~~~~~~~~root: ", root, ", data: ", data);
      return "auth response from remoteHul~~~~~";

    } 
  },
  Mutation: {
    auth1: async (root: any, data: any, context: any) => {
      console.log("auth1~~~~~root: ", root, ", data: ", data);
      return "auth1 response from remoteHul~~~~~";

    },
    createUserByFacebookStrategy: async (root: any, data: any, context: any) => {
      console.log("createUserByFacebookStrategy~~~~~root: ", root, ", data: ", data);
      
      return "createUserByFacebookStrategy  asdfasdfsf";

    },
    logInUserByFacebookStrategy: async (root: any, data: any, context: any) => {
      console.log("logInUserByFacebookStrategy~~~~~root: ", root, ", data: ", data);
      return "logInUserByFacebookStrategy sdfasdfasdf";

    }    
    
  }
};