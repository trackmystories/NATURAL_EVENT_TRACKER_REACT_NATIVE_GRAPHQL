import React from 'react';
import Map from '../map';
import renderer from 'react-test-renderer';

describe('Map', () => {
  it('renders without error', () => {
    renderer.create(<Map />);
  });
});
