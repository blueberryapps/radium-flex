export type BreakpointKey = 'xs' | 'ms' | 'sm' | 'md' | 'lg';
export type Breakpoints = {[K in BreakpointKey]: number};

export type MediaQueryKey = BreakpointKey | 'col';
export type MediaQueries = {[K in MediaQueryKey]: string};

export interface BoxProps {
  className?: string;
  flex?: boolean;
  order?: number;
  self?:
  'auto' |
  'stretch' |
  'center' |
  'baseline' |
  'flex-start' |
  'flex-end';
  grow?: number;
  shrink?: number;
  basis?: number | string;
  columns?: number;
  col?: number;
  lg?: number;
  md?: number;
  sm?: number;
  ms?: number;
  xs?: number;
  style?: Object;
  testId?: string;
  routerLink?: boolean;
  to: string;
}

export interface FlexProps {
  className?: string;
  debug?: boolean;
  direction?: 'row' | 'column';
  style?: Object;
  wrap?: 'wrap' | 'nowrap';
  gap?: number | boolean;
  columns?: number;
  align?:
  'stretch' |
  'center' |
  'baseline' |
  'flex-start' |
  'flex-end';
  content?:
  'stretch' |
  'center' |
  'space-around' |
  'space-between' |
  'flex-start' |
  'flex-end';
  justify?:
  'center' |
  'space-around' |
  'space-between' |
  'flex-start' |
  'flex-end';
}
