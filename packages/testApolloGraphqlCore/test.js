"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_client_1 = require("apollo-client");
var apollo_link_http_1 = require("apollo-link-http");
var graphql_tag_1 = require("graphql-tag");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var node_fetch_1 = require("node-fetch");
var httpLink = apollo_link_http_1.createHttpLink({ uri: 'http://localhost:3000/graphql', fetch: node_fetch_1["default"] });
var client = new apollo_client_1.ApolloClient({
    link: httpLink,
    cache: new apollo_cache_inmemory_1.InMemoryCache()
});
var hul = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query {\n        allSavedTab {\n            title\n            url\n        }\n    }\n"], ["\n    query {\n        allSavedTab {\n            title\n            url\n        }\n    }\n"])));
var ALL_SAVED_ITEM = graphql_tag_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query {\n        allSavedWindows {\n            savedWindowId\n            id\n            \n                  \n        }\n    } \n"], ["\n    query {\n        allSavedWindows {\n            savedWindowId\n            id\n            \n                  \n        }\n    } \n"])));
var nested = graphql_tag_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nquery {\n    testNested {\n      idd\n      name\n      children{\n        name\n        age\n      }\n    }\n  }\n"], ["\nquery {\n    testNested {\n      idd\n      name\n      children{\n        name\n        age\n      }\n    }\n  }\n"])));
var why = graphql_tag_1["default"](templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nquery {\n    testWhat {\n      \n      name\n    }\n  }\n"], ["\nquery {\n    testWhat {\n      \n      name\n    }\n  }\n"])));
var please = graphql_tag_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nquery {\n    whywhy {\n      \n      name\n    }\n  }\n"], ["\nquery {\n    whywhy {\n      \n      name\n    }\n  }\n"
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
])));
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
client.query({ query: please })
    .then(function (res) { return console.log(res.data.whywhy); })["catch"](function (error) { return console.error(error); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
