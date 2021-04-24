import React from 'react';
import {InMemoryCache} from '@apollo/client';
import {renderApollo, cleanup, waitForElement} from '../../test-utils';
import Home, {GET_EONET} from '../home';

const mockData = {
  id: 'EONET_5280',
  title: 'Iceberg A75',
  link: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_5280',
  description: null,
  sources: [
    {
      id: 'NATICE',
      url: 'https://usicecenter.gov/pub/Iceberg_Tabular.csv',
    },
  ],
  geometry: [
    {
      magnitudeValue: '24',
      magnitudeUnit: 'NM^2',
      date: '2021-03-26T00:00:00Z',
      type: 'Point',
      coordinates: [-60.49, -74.13],
    },
    {
      magnitudeValue: '24',
      magnitudeUnit: 'NM^2',
      date: '2021-04-09T00:00:00Z',
      type: 'Point',
      coordinates: [-60.27, -73.56],
    },
  ],
};

describe('data page', () => {
  afterEach(cleanup);

  test('renders data', async () => {
    const cache = new InMemoryCache({addTypename: false});
    const mocks = [
      {
        request: {query: GET_EONET},
        results: {
          data: {
            seaLakeIce: [mockData],
          },
        },
      },
    ];
    const {getByText} = await renderApollo(<Home />, {
      mocks,
      cache,
    });
    await waitForElement(() => getByText(/test home/i));
  });
});
