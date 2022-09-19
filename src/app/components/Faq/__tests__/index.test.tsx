import * as React from 'react';
import { render } from '@testing-library/react';

import { Faq } from '..';

describe('<Faq  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Faq />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
