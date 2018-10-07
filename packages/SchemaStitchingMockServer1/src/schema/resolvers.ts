
export default {
  Query: {
    remoteWhat: async (root: any, data: any, context: any, info: any) => {
      console.log("remoteWhat~~~~~~~~");
      return "response from remoteWhat~~~~ ";
    },
    testQuery: async (root: any, data: any, context: any, info: any) => {
      console.log("testQuery~~~~~~~~");
      return "response from remoteWhat~~~~ ";
    },
  },
  Mutation: {
    remoteHul: async (root: any, data: any, context: any,info:any) => {
      console.log("remoteHul~~~~~~~~root:",root,", data:",data,", context: ",context,"info:",info);
      return "response from remoteHul~~~~~";

    } 
  },
  Whatup: {
    name: () => {
      return "name????"
    },
    payload: () => {
      return "payload???"
    }
  }
};