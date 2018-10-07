import * as express from 'express'; // https://stackoverflow.com/questions/34520288/nodejs-typescript-unclear-syntax-with-type-script-compiled-code/34522813#34522813
import * as bodyParser from 'body-parser'; // ㅉㅉㅉ  이렇게 아니면 var bodyParser = require('body-parser') 이걸로 해야함. 아니면 import path = require('path');
import * as passport from 'passport';
//import passsportMiddleware from './passportMiddleware'

import { apolloExpress, graphiqlExpress } from 'apollo-server';
var { makeExecutableSchema } = require('graphql-tools');
import Schema from './schema/index';
import Resolvers from './schema/resolvers';

import {test1, test2, test3, test4 } from './testMiddle1'

import facebookStrategy from './facebookStrategy';
facebookStrategy();
import googleStrategy from './googleStrategy';
googleStrategy();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(test1);
app.use('/', test2);
app.use('/graphql', test3);
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook/failed' }), 
  (req, res) => {
    console.log("/auth/facebook 콜백", req.user);
    res.send({ result: "facebook 잘됨", req: req.body, user: req.user, session: req.session});
  }
);
app.get('/auth/facebook/failed', (req, res, next)=>{
  console.log("실패하면 여기로옴??");
  res.send({ result: "실패1!!!!!!!"});
});
const hul = (req, res, next) => {
  console.log("req.body: ", req.body);
  next()
}
app.all('/auth/google', hul, passport.authenticate('google', { scope: ['profile'] }));
app.all('/auth/google/callback', passport.authenticate('google'),
  (req, res) => {
    console.log("/auth/google/callback 콜백", req.user);
    res.send({ result: "google 잘됨", req: req.body, user: req.user});
  }
);
//app.use(passsportMiddleware);


const GRAPHQL_PORT = 8500;

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

// `context` must be an object and can't be undefined when using connectors
app.use('/graphql', apolloExpress(req => ({
  schema: executableSchema,
  context: {
    body: req.body,
    req,
  }, //at least(!) an empty object
})));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(GRAPHQL_PORT, () => console.log(
  `Apollo Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
