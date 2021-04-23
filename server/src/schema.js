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

  type User {
    uid: ID!
    email: String!
    name: String!
  }

  type AuthPayload {
    user: User!
  }

  type Mutation {
    signupWithEmail(
      email: String!
      password: String!
      name: String!
    ): AuthPayload!
    loginWithEmail(email: String!, password: String!): AuthPayload!
    handleForgotPassword(email: String!): AuthPayload!
    handleDeleteProfile(
      email: String!
      name: String!
      uid: String!
    ): AuthPayload!
    handleLogout(email: String!, name: String!, uid: String): AuthPayload!
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
