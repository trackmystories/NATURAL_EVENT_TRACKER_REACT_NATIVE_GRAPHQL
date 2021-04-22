const {gql} = require('apollo-server');

const typeDefs = gql`
  scalar JSON

  type Event {
    id: ID!
    cursor: ID!
    title: String
    description: String
    link: String
    closed: String
    categories: [Categories]
    sources: [Sources]
    geometry: [Geometry]
  }

  type Categories {
    id: ID!
    title: String
  }

  type Sources {
    id: String
    url: String
  }

  type Geometry {
    magnitudeValue: String
    magnitudeUnit: String
    date: String
    type: String
    coordinates: [JSON]
  }

  type Query {
    events: [Event!]!
    volcanoes: [Event!]!
    wildfires: [Event!]!
    seaLakeIce: [Event!]!
    severeStorms: [Event!]!
  }
`;

module.exports = typeDefs;
