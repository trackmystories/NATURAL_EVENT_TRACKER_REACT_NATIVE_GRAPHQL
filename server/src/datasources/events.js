const {RESTDataSource} = require('apollo-datasource-rest');

class EventsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://eonet.sci.gsfc.nasa.gov/api/v3/';
  }

  async queryAllEvents() {
    const response = await this.get('events');
    return response.events;
  }

  async getAllEvents() {
    const response = await this.queryAllEvents();
    return Array.isArray(response)
      ? response.map(item => this.eventReducer(item))
      : [];
  }

  eventReducer(item) {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      link: item.link,
      closed: item.closed,
      categories: item.categories.map(i => ({
        id: i.id,
        title: i.title,
      })),
      sources: item.sources.map(i => ({
        id: i.id,
        url: i.url,
      })),
      geometry: item.geometry.map(i => ({
        magnitudeValue: i.magnitudeValue,
        magnitudeUnit: i.magnitudeUnit,
        date: i.date,
        type: i.type,
        coordinates: i.coordinates,
      })),
    };
  }
}

module.exports = EventsAPI;
