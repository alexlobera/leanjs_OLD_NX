import React from 'react';
import { render } from '@testing-library/react';

import MagicLink from './magic-link';

describe('MagicLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MagicLink />);
    expect(baseElement).toBeTruthy();
  });
});
