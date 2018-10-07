"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Section = `
  type Section {
    id: String!,
    name: String!,
    icon: String!,
    areas: [String!]!
    startDate: String,
    endDate: String,
  }
`;
exports.default = () => [Section];
//# sourceMappingURL=Section.js.map