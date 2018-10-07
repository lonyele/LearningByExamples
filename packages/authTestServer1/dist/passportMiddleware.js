"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var passport = require('passport');
var router = express.Router();
const facebookStrategy_1 = require("./facebookStrategy");
facebookStrategy_1.default();
const whatup = (req, res, next) => {
    console.log("여기 잘드어왔찌?");
    console.log("query: ", req.body.query, typeof req.body.query);
    console.log("variables: ", req.body.variables, typeof req.body.variables);
    console.log("body: ", req.body);
    if (req.body.variables || req.body.variables.name === 'ok facebookStrategy working??') {
        console.log("ok variable에서 name 체크함. facebook으로");
        passport.authenticate('facebook');
    }
    next();
};
const localStrategy = (req, res, next) => {
    console.log("local strategy~~~~");
    next();
};
const passportMiddleware = express();
passportMiddleware.use(passport.initialize());
passportMiddleware.use(whatup, localStrategy);
exports.default = passportMiddleware;
//# sourceMappingURL=passportMiddleware.js.map