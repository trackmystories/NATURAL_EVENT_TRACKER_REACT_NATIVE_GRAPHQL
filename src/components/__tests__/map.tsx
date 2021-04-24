import React from 'react';
import {render, cleanup} from '../../test-utils';
import Map from '../map';

describe('Map', () => {
  afterEach(cleanup);

  test('renders without error', () => {
    render(<Map />);
  });
});
