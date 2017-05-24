import { render } from 'enzyme';
import  { StyleRoot } from 'radium';
import * as React from 'react';
import { Box, Flex } from '../index';

it('should render Flex with default style', () => {
  expect(render(<StyleRoot><Flex><Box>content</Box></Flex></StyleRoot>)).toMatchSnapshot();
});

it('should render Flex with falsey elements', () => {
  expect(render(<StyleRoot><Flex><Box>content</Box>{null}{false}</Flex></StyleRoot>)).toMatchSnapshot();
});
