// // Modern JavaScript
// import { Database, aql } from "arangojs";
// const db = new Database();
// (async function () {
//   const now = Date.now();
//   try {
//     const cursor = await db.query(aql`
//       RETURN ${now}
//     `);
//     const result = await cursor.next();
//     // ...
//   } catch (err) {
//     // ...
//   }
// })();
const faker = require('faker');
const uuidv4 = require('uuid/v4');
const moment = require('moment')




const testInsert = () => {
  var arangojs = require("arangojs");
  var db = new arangojs.Database();
  var now = Date.now();
  db.useDatabase('test-arangojs')
  db.query({
    query: "RETURN @value",
    bindVars: { value: now }
  })
    .then(function (cursor) {
      return cursor.next().then(function (result) {
        // ...
        console.log('result??', result)
      });
    })
    .catch(function (err) {
      // ...
      console.log('err??', err)
    });

  const collection = db.collection('secondCollection');
  collection.create().then(
    () => console.log('Collection created'),
    err => console.error('Failed to create collection:', err)
  );


  for (let i = 0; i < 10; i++) {
    const doc = {
      _key: 'secondDocument' + i, // 띄어쓰기 안되구요
      a: 'foo ' + i,
      b: 'bar ' + i,
      c: Date()
    };
    collection.save(doc).then(
      meta => {
        console.log('Document saved:', meta._rev)
        // collection.update('secondDocument', { d: 'qux' }).then(
        //   meta => {
        //     console.log('Document updated:', meta._rev)
        //     collection.document('secondDocument').then(
        //       doc => console.log('Document:', JSON.stringify(doc, null, 2)),
        //       err => console.error('Failed to fetch document:', err)
        //     );
        //   },
        //   err => console.error('Failed to update document:', err)
        // );
      },
      err => console.error('Failed to save document:', err)
    );
  }

  const fairCollection = db.collection('fair');
  fairCollection.create().then(
    () => console.log('fairCollection created'),
    err => console.error('Failed to create collection:', err)
  );
  let allFairData = {}
  for (let i = 0; i < 3; i++) {
    const fairId = uuidv4()
    const fairData = makeFairData(fairId);
    for (let j = 0; j < 5; j++) {
      const sectionId = uuidv4()
      const sectionData = makeSectionData(sectionId, fairData.startDate, fairData.endDate)
      // console.log('sectionData', sectionData)
      fairData.sections[sectionId] = sectionData
    }
    allFairData[fairId] = fairData
    fairCollection.save(fairData).then(
      meta => {
        console.log('fairData saved:', meta._rev)
      },
      err => console.error('Failed to save document:', err)
    );
    // console.log('fairData', fairData)
  }
  // console.log('allFair', allFairData)
}







const makeFairData = (fairId) => {
  const fairStartDate = moment(faker.date.between(moment().subtract(150, 'days'), moment().add(150, 'days')))
  const randomDateTobeAdded = Math.floor(Math.random() * 20)
  const fairEndDate = fairStartDate.clone().add(randomDateTobeAdded, 'days')
  const fairData = {
    id: fairId,
    name: `Fair - ${faker.commerce.productName()}`,
    color: faker.internet.color(),
    logo: '일단 보류',
    isSet: faker.random.boolean(),
    startDate: fairStartDate,
    endDate: fairEndDate,
    sections: {},
    facilities: {},
    construction: {
      startDate: fairStartDate.clone().subtract(2, 'days'),
      endDate: fairStartDate.clone().subtract(1, 'days')
    },
    dismantling: {
      startDate: fairEndDate.clone().add(1, 'days'),
      endDate: fairEndDate.clone().add(2, 'days')
    }
  }
  return fairData
}




const makeSectionData = (sectionId, fairStartDate, fairEndDate) => {
  const sectionStartDate = moment(faker.date.between(fairStartDate, fairEndDate))
  const sectionEndDate = moment(faker.date.between(sectionStartDate, fairEndDate))
  const sectionData = {
    id: sectionId,
    name: `Section - ${faker.commerce.productName()}`,
    icon: '일단 보류',
    areas: ['건물1', '건물2', '복도1'],
    startDate: sectionStartDate,
    endDate: sectionEndDate,
  }
  return sectionData
}

const makeFacilityData = (facilityId) => {
  const facilityData = {
    [facilityId]: {
      id: facilityId,
      name: `Facility - ${faker.random.number()}`,
      isTemporary: faker.random.boolean(),
      status: faker.random.arrayElement(["Active", "Broken", "Fixing", "Congestion"])
    }
  }
  return facilityData
}

const makeDevice = (devideId) => {
  const devideData = {
    [devideId]: {
      id: devideId,
      name: `Device - ${faker.random.number()}`,
      type: ['List', 'Fair Only'],
      preview: '몰름'
    }
  }
}






// testInsert()

const makeHallData = () => {

  const hallId = uuidv4()
  const hallData = {
    [hallId]: {
      id: hallId,
      name: `Hall - ${faker.random.number()}`,
      positions: '일단 보류'
    }
  }
}