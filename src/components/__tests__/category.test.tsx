import React from 'react';
import Category from '../category';
import renderer from 'react-test-renderer';

describe('Category', () => {
  it('renders without error', () => {
    renderer.create(<Category />);
  });
});
