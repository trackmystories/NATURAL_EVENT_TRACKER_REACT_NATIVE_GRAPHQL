import React from 'react';
import Header from '../header';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Header />);
});
