import React from 'react';
import {render, cleanup} from '../../test-utils';
import Category from '../category';

describe('Category', () => {
  afterEach(cleanup);

  test('renders without error', () => {
    render(<Category />);
  });
});
