"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"); // https://stackoverflow.com/questions/34520288/nodejs-typescript-unclear-syntax-with-type-script-compiled-code/34522813#34522813
const bodyParser = require("body-parser"); // ㅉㅉㅉ  이렇게 아니면 var bodyParser = require('body-parser') 이걸로 해야함. 아니면 import path = require('path');
const passport = require("passport");
//import passsportMiddleware from './passportMiddleware'
const apollo_server_1 = require("apollo-server");
var { makeExecutableSchema } = require('graphql-tools');
const index_1 = require("./schema/index");
const resolvers_1 = require("./schema/resolvers");
const testMiddle1_1 = require("./testMiddle1");
const facebookStrategy_1 = require("./facebookStrategy");
facebookStrategy_1.default();
const googleStrategy_1 = require("./googleStrategy");
googleStrategy_1.default();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(testMiddle1_1.test1);
app.use('/', testMiddle1_1.test2);
app.use('/graphql', testMiddle1_1.test3);
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/auth/facebook/failed' }), (req, res) => {
    console.log("/auth/facebook 콜백", req.user);
    res.send({ result: "facebook 잘됨", req: req.body, user: req.user, session: req.session });
});
app.get('/auth/facebook/failed', (req, res, next) => {
    console.log("실패하면 여기로옴??");
    res.send({ result: "실패1!!!!!!!" });
});
const hul = (req, res, next) => {
    console.log("req.body: ", req.body);
    next();
};
app.all('/auth/google', hul, passport.authenticate('google', { scope: ['profile'] }));
app.all('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    console.log("/auth/google/callback 콜백", req.user);
    res.send({ result: "google 잘됨", req: req.body, user: req.user });
});
//app.use(passsportMiddleware);
const GRAPHQL_PORT = 8500;
const executableSchema = makeExecutableSchema({
    typeDefs: index_1.default,
    resolvers: resolvers_1.default,
});
// `context` must be an object and can't be undefined when using connectors
app.use('/graphql', apollo_server_1.apolloExpress(req => ({
    schema: executableSchema,
    context: {
        body: req.body,
        req,
    },
})));
app.use('/graphiql', apollo_server_1.graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(GRAPHQL_PORT, () => console.log(`Apollo Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`));
//# sourceMappingURL=index.js.map