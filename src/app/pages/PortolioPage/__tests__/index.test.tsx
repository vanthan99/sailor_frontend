import * as React from 'react';
import { render } from '@testing-library/react';

import { PortolioPage } from '..';

describe('<PortolioPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PortolioPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
