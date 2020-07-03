import React from 'react';
import { render } from '@testing-library/react';

import { Tweet } from './Tweet';

describe(' Tweet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tweet id="123" />);
    expect(baseElement).toBeTruthy();
  });
});
