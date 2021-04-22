const {RESTDataSource} = require('apollo-datasource-rest');

class CategoriesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://eonet.sci.gsfc.nasa.gov/api/v3/';
  }

  async queryAllVolcanoes() {
    const response = await this.get('categories/volcanoes');
    return response.events;
  }

  async getAllVolcanoes() {
    const response = await this.queryAllVolcanoes();
    return Array.isArray(response)
      ? response.map(item => this.eventReducer(item))
      : [];
  }

  async queryAllWildFires() {
    const response = await this.get('categories/wildfires');
    return response.events;
  }

  async getAllWildFires() {
    const response = await this.queryAllWildFires();
    return Array.isArray(response)
      ? response.map(item => this.eventReducer(item))
      : [];
  }

  async queryAllSeaLakeIce() {
    const response = await this.get('categories/seaLakeIce');
    return response.events;
  }

  async getAllSeaLakeIce() {
    const response = await this.queryAllSeaLakeIce();
    return Array.isArray(response)
      ? response.map(item => this.eventReducer(item))
      : [];
  }

  async queryAllSevereStorms() {
    const response = await this.get('categories/severeStorms');
    return response.events;
  }

  async getAllSevereStorms() {
    const response = await this.queryAllSevereStorms();
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

module.exports = CategoriesAPI;
