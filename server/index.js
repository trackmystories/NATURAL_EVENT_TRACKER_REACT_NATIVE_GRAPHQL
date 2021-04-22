require('dotenv').config();
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');
const EventsAPI = require('./src/datasources/events');
const CategoriesAPI = require('./src/datasources/categories');
const GraphQLJSON = require('graphql-type-json');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  JSON: GraphQLJSON,
  dataSources: () => ({
    eventsAPI: new EventsAPI(),
    categoriesAPI: new CategoriesAPI(),
  }),
});

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
