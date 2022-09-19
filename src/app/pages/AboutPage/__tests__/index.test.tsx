import * as React from 'react';
import { render } from '@testing-library/react';

import { AboutPage } from '..';

describe('<AboutPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AboutPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
