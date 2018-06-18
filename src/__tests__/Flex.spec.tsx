import { configure, render } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Radium from 'radium';
import * as React from 'react';
import { Box, Flex } from '../index';

configure({ adapter: new Adapter() });

it('should render Flex with default style', () => {
  expect(render(<Radium.StyleRoot><Flex><Box>content</Box></Flex></Radium.StyleRoot>)).toMatchSnapshot();
});

it('should render Flex with falsey elements', () => {
  expect(render(<Radium.StyleRoot><Flex><Box>content</Box>{null}{false}</Flex></Radium.StyleRoot>)).toMatchSnapshot();
});
