import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import gql from 'graphql-tag';
import {InMemoryCache} from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
const httpLink = createHttpLink({ uri: 'http://localhost:3000/graphql' , fetch});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const hul = gql`
    query {
        allSavedTab {
            title
            url
        }
    }
`
const ALL_SAVED_ITEM = gql`
    query {
        allSavedWindows {
            savedWindowId
            id
            
                  
        }
    } 
`;

const nested = gql`
query {
    testNested {
      idd
      name
      children{
        name
        age
      }
    }
  }
`
const why = gql`
query {
    testWhat {
      
      name
    }
  }
`
const please = gql`
query {
    whywhy {
      
      name
    }
  }
`

// tabs {
//     savedTabId
//     title
//     url
//     favIconUrl
// }
// incognito
//             savedWindowId
//             tabs {
//                 savedTabId
//                 title
//                 url
//                 favIconUrl
//             }
// client.query({query: ALL_SAVED_ITEM})
// .then(res => console.log(res.data.allSavedWindows))
// .catch(error => console.error(error))

// client.query({query: hul})
// .then(res => console.log(res.data.allSavedTab))
// .catch(error => console.error(error))

// client.query({query: nested})
// .then(res => console.log(res.data.testNested))
// .catch(error => console.error(error))

// client.query({query: why})
// .then(res => console.log(res.data.testWhat))
// .catch(error => console.error(error))


client.query({query: please})
.then(res => console.log(res.data.whywhy))
.catch(error => console.error(error))