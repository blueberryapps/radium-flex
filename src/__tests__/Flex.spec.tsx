import { render } from 'enzyme';
import * as React from 'react';
import { Box, Flex } from '../index';

it('should render Flex with default style', () => {
  expect(render(<Flex><Box>content</Box></Flex>)).toMatchSnapshot();
});
