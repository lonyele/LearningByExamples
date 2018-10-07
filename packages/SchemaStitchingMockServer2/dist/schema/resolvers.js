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
        remoteWhat: (root, data, context, info) => __awaiter(this, void 0, void 0, function* () {
            console.log("remoteWhat~~~~~~~~");
            return "mockServer2 response from remoteWhat~~~~ ";
        }),
        testQuery: (root, data, context, info) => __awaiter(this, void 0, void 0, function* () {
            console.log("testQuery~~~~~~~~");
            return "mockServer2 response from remoteWhat~~~~ ";
        }),
    },
    Mutation: {
        remoteHul: (root, data, context) => __awaiter(this, void 0, void 0, function* () {
            console.log("remoteHul~~~~~~~~");
            return "mockServer2 response from remoteHul~~~~~";
        })
    },
    Whatup: {
        name: () => {
            return "mockServer2  name????";
        },
        payload: () => {
            return "mockServer2payload???";
        }
    }
};
//# sourceMappingURL=resolvers.js.map