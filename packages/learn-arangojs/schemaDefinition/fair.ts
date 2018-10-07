import Section from './Section.js';
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

export default () => [Fair, Construction, Dismantling, Section];