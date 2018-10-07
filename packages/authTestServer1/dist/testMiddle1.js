"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
exports.test1 = (req, res, next) => {
    console.log("test1 middleware");
    next();
};
exports.test2 = (req, res, next) => {
    console.log("test2 middleware");
    next();
};
exports.test3 = (req, res, next) => {
    console.log("test3 middleware");
    next();
};
exports.test4 = (req, res, next) => {
    console.log("test4 middleware");
    passport.authenticate('facebook');
};
//# sourceMappingURL=testMiddle1.js.map