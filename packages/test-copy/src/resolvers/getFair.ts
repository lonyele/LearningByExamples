import { aql } from "arangojs";
const whatup = [
  {
    id: "getFair - Harry Potter and the Sorcerer's stone",
    name: "J.K. Rowling"
  },
  {
    id: "getFair - Jurassic Park",
    name: "Michael Crichton"
  }
];

export const getFairResolver = {
  getFairs: async (a: any, b: any, c: any, d: any) => {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);

    const what = new c.mongo.Another({
      another: "from graphiql",
      what: "this from graphiql"
    });
    what.save((err: any, test: any) => {
      console.log("inside", what);
    });

    return whatup;
  }
};
