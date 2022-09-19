import * as React from 'react';
import { render } from '@testing-library/react';

import { PortfolioItem } from '..';

describe('<PortfolioItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PortfolioItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
