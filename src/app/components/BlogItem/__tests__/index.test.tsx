import * as React from 'react';
import { render } from '@testing-library/react';

import { BlogItem } from '..';

describe('<BlogItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BlogItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
