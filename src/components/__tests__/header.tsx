import React from 'react';
import {render, cleanup} from '../../test-utils';
import Header from '../header';

describe('Header', () => {
  afterEach(cleanup);

  test('renders without error', () => {
    render(<Header />);
  });
});
