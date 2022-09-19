import * as React from 'react';
import { render } from '@testing-library/react';

import { ServicePage } from '..';

describe('<ServicePage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ServicePage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
