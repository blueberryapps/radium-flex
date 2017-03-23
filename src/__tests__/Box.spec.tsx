import { render } from 'enzyme';
import { StyleRoot } from 'radium';
import * as React from 'react';
import Box from '../Box';

it('should render Box with default style', () => {
  expect(render(<StyleRoot><Box>content</Box></StyleRoot>)).toMatchSnapshot();
});
