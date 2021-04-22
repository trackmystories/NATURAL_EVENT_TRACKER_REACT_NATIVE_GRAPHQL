const EventsAPI = require('../events');

const mocks = {
  get: jest.fn(),
};

const ds = new EventsAPI();
ds.get = mocks.get;

describe('[EventsAPI.eventReducer]', () => {
  it('properly transforms event', () => {
    expect(ds.eventReducer(mockEventResponse)).toEqual(mockEvent);
  });
});

describe('[EventsAPI.queryAllEvents]', () => {
  it('properly transforms events', () => {
    mock.get.mockReturnValueOnce([mockEventResponse]);
    expect(mocks.get).toBeCalledWith('events');
  });
});

describe('[EventsAPI.getAllEvents]', () => {
  it('looks up events from api', async () => {
    mock.get.mockReturnValueOnce([mockEventResponse]);
    const res = await ds.getAllEvents();

    expect(res).toEqual([mockEvent]);
  });
});

const mockEvent = {
  id: EONET_5303,
  title: 'Wildfires - Valparaiso, Vina del Mar and Quilpue, Chile',
  description: null,
  link: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_5303',
  closed: null,
  categories: [
    {
      id: 'wildfires',
      title: 'Wildfires',
    },
  ],
  sources: [
    {
      id: 'PDC',
      url: 'emops.pdc.org/emops/?hazard_id=123392',
    },
  ],
  geometry: [
    {
      magnitudeValue: null,
      magnitudeUnit: null,
      date: '2021-04-16T16:31:00Z',
      type: 'Point',
    },
  ],
  coordinates: [-71.49142, -33.10204],
};

const mockEventResponse = {
  id: EONET_5303,
  title: 'Wildfires - Valparaiso, Vina del Mar and Quilpue, Chile',
  description: null,
  link: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_5303',
  closed: null,
  categories: [
    {
      id: 'wildfires',
      title: 'Wildfires',
    },
  ],
  sources: [
    {
      id: 'PDC',
      url: 'emops.pdc.org/emops/?hazard_id=123392',
    },
  ],
  geometry: [
    {
      magnitudeValue: null,
      magnitudeUnit: null,
      date: '2021-04-16T16:31:00Z',
      type: 'Point',
    },
  ],
  coordinates: [-71.49142, -33.10204],
};

module.exports.mockEventResponse = mockEventResponse;
