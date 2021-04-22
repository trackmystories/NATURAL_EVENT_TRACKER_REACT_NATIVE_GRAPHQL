const firebase = require('./api/config');

module.exports = {
  Query: {
    events: (_, __, {dataSources}) => dataSources.eventsAPI.getAllEvents(),

    volcanoes: (_, __, {dataSources}) =>
      dataSources.categoriesAPI.getAllVolcanoes(),

    wildfires: (_, __, {dataSources}) =>
      dataSources.categoriesAPI.getAllWildFires(),

    seaLakeIce: (_, __, {dataSources}) =>
      dataSources.categoriesAPI.getAllSeaLakeIce(),

    severeStorms: (_, __, {dataSources}) =>
      dataSources.categoriesAPI.getAllSevereStorms(),
  },
};
