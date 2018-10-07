import { Database, aql } from "arangojs";
export const initArango = () => {

  const db = new Database();
  db.useDatabase('test-arangojs');
  testQuery(db);
  return db
}


const testQuery = async (db: any) => {
  try {
    const query = aql`
        FOR f IN fair
        FILTER f.color == "#7b6d40"  
        RETURN f
      `
    const cursor = await db.query(query, { "count": true }); // count 요것만으로도 성능문제 있음
    const result = await cursor.next();
    // console.log("!!!!count", cursor.count)
    // console.log('result', result)

    // const result2 = await cursor.next();
    // console.log('result2', result2)

    // const result3 = await cursor.next();
    // console.log('result3', result3)

    // const result4 = await cursor.next();
    // console.log('result4', result4)
    // ...
  } catch (err) {
    // ...
    console.warn('error', err)
  }
}