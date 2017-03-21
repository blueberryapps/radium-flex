import { render } from 'enzyme';
import * as React from 'react';
import Box from '../Box';

it('should render Box with default style', () => {
  expect(render(<Box>content</Box>)).toMatchSnapshot();
});
