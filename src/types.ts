export type BreakpointKey = 'xs' | 'ms' | 'sm' | 'md' | 'lg';
export type Breakpoints = {[K in BreakpointKey] : number};

export type MediaQueryKey = BreakpointKey | 'col';
export type MediaQueries = {[K in MediaQueryKey] : string};

export type ColumnSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

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
  col?: ColumnSize;
  lg?: ColumnSize;
  md?: ColumnSize;
  sm?: ColumnSize;
  ms?: ColumnSize;
  xs?: ColumnSize;
  style?: Object;
  testId?: string;
  routerLink?: boolean;
  to: string;
};

export interface FlexProps {
  className?: string;
  debug?: boolean;
  direction?: 'row' | 'column';
  style?: Object;
  wrap?: 'wrap' | 'nowrap';
  gap?: number | boolean;
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
};
