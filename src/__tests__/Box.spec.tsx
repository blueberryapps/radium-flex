import { render } from 'enzyme';
import  { StyleRoot } from 'radium';
import * as React from 'react';
import Box, { Breakpoints, calculateColumnWidth } from '../Box';
import { BoxProps } from '../types';

it('should render Box with default style', () => {
  expect(render(<StyleRoot><Box>content</Box></StyleRoot>)).toMatchSnapshot();
});

describe('calculate column width', () => {
  const testCases = [
    {props: {col: 1, xs: 1, ms: 1, sm: 1, md: 1, lg: 1}, size: 'ms', width: 1},
    {props: {col: 1}, size: 'ms', width: 1},
    {props: {col: 1}, size: 'lg', width: 1},
    {props: {col: 1, xs: 2, ms: 3, sm: 4, md: 5, lg: 6}, size: 'col', width: 1},
    {props: {col: 1, xs: 2, ms: 3, sm: 4, md: 5, lg: 6}, size: 'xs', width: 2},
    {props: {col: 1, xs: 2, ms: 3, sm: 4, md: 5, lg: 6}, size: 'ms', width: 3},
    {props: {col: 1, xs: 2, ms: 3, sm: 4, md: 5, lg: 6}, size: 'sm', width: 4},
    {props: {col: 1, xs: 2, ms: 3, sm: 4, md: 5, lg: 6}, size: 'md', width: 5},
    {props: {col: 1, xs: 2, ms: 3, sm: 4, md: 5, lg: 6}, size: 'lg', width: 6},
    {props: {xs: 2, md: 5}, size: 'col', width: 12},
    {props: {xs: 2, md: 5}, size: 'xs', width: 2},
    {props: {xs: 2, md: 5}, size: 'ms', width: 2},
    {props: {xs: 2, md: 5}, size: 'sm', width: 2},
    {props: {xs: 2, md: 5}, size: 'md', width: 5},
    {props: {xs: 2, md: 5}, size: 'lg', width: 5},
    {props: {col: 0, md: 5}, size: 'xs', width: 0},
    {props: {col: 0, md: 5}, size: 'ms', width: 0},
    {props: {col: 0, md: 5}, size: 'sm', width: 0},
    {props: {col: 0, md: 5}, size: 'md', width: 5},
    {props: {col: 0, md: 5}, size: 'lg', width: 5},
    {props: {col: 5, md: 0}, size: 'xs', width: 5},
    {props: {col: 5, md: 0}, size: 'ms', width: 5},
    {props: {col: 5, md: 0}, size: 'sm', width: 5},
    {props: {col: 5, md: 0}, size: 'md', width: 0},
    {props: {col: 5, md: 0}, size: 'lg', width: 0},
  ];

  testCases.forEach((testCase) => {
    it(`Calculates width: ${JSON.stringify(testCase)}`, () => {
      expect(calculateColumnWidth(testCase.props as BoxProps, testCase.size as Breakpoints))
        .toEqual(testCase.width);
    });
  });
});
