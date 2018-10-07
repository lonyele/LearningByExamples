"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        auth: (root, data, context) => __awaiter(this, void 0, void 0, function* () {
            console.log("auth~~~~~~~~root: ", root, ", data: ", data);
            return "auth response from remoteHul~~~~~";
        })
    },
    Mutation: {
        auth1: (root, data, context) => __awaiter(this, void 0, void 0, function* () {
            console.log("auth1~~~~~root: ", root, ", data: ", data);
            return "auth1 response from remoteHul~~~~~";
        }),
        createUserByFacebookStrategy: (root, data, context) => __awaiter(this, void 0, void 0, function* () {
            console.log("createUserByFacebookStrategy~~~~~root: ", root, ", data: ", data);
            return "createUserByFacebookStrategy  asdfasdfsf";
        }),
        logInUserByFacebookStrategy: (root, data, context) => __awaiter(this, void 0, void 0, function* () {
            console.log("logInUserByFacebookStrategy~~~~~root: ", root, ", data: ", data);
            return "logInUserByFacebookStrategy sdfasdfasdf";
        })
    }
};
//# sourceMappingURL=resolvers.js.map