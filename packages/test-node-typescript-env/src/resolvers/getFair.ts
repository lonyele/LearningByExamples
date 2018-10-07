import { aql } from "arangojs";
const whatup = [
  {
    id: "getFair - Harry Potter and the Sorcerer's stone",
    name: 'J.K. Rowling',
  },
  {
    id: 'getFair - Jurassic Park',
    name: 'Michael Crichton',
  },
];


export const getFairResolver = {
  getFairs: async (a: any, b: any, c: any, d: any) => {
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)

    // 이거 머임... aql 하라그러는대로 있고. 하튼 이게 됨
    const query = `
        FOR f IN fair
        FILTER f.color == @color  
        RETURN f
      `
    const bindVars = {
      "color": "#7b6d40"
    }
    const cursor = await c.arango.query(query, bindVars, { count: true }); // count 요것만으로도 성능문제 있음
    const result = await cursor.next();
    console.log('이건 getFair resolver 에서임', cursor.count, result)

    return whatup
  }
}