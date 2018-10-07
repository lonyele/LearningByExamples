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

export default () => [Section];