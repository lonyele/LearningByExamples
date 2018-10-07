"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Section_js_1 = require("./Section.js");
const Construction = `
  type Construction {
    startDate: String!,
    endDate: String!
  }
`;
const Dismantling = `
  type Dismantling {
    startDate: String!,
    endDate: String!
  }
`;
const Fair = `
  type Fair {
    id: String!,
    name: String!,
    color: String!,
    logo: String!,
    isSet: Boolean!,
    startDate: String!,
    endDate: String!,
    sections: [Section]
    construction: [Construction!]!,
    dismantling: [Dismantling!]!
  }
`;
exports.default = () => [Fair, Construction, Dismantling, Section_js_1.default];
//# sourceMappingURL=fair.js.map