import * as React from 'react';
import { render } from '@testing-library/react';

import { PricingPage } from '..';

describe('<PricingPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PricingPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
