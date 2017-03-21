import * as React from 'react';
import { Breakpoints, MediaQueries } from './types';

export const columns = 12;
export const defaultGap = 16;

export const breakpoints: Breakpoints = {
  xs: 320,
  ms: 480,
  sm: 768,
  md: 992,
  lg: 1200,
};

export const mediaQueries: MediaQueries = {
  col: '@media all',
  xs: `@media (min-width: ${breakpoints.xs}px) and (min-width: ${breakpoints.ms - 1}px)`,
  ms: `@media (min-width: ${breakpoints.ms}px) and (min-width: ${breakpoints.sm - 1}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px) and (min-width: ${breakpoints.md - 1}px)`,
  md: `@media (min-width: ${breakpoints.md}px) and (min-width: ${breakpoints.lg - 1}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
};

export function debugStyle(): React.CSSProperties {
  return { backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` };
};
