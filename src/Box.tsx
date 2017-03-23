import * as Radium from 'radium';
import * as React from 'react';
import { columns, debugStyle, defaultGap, mediaQueries } from './styles';
import { BoxProps, ColumnSize, FlexProps, MediaQueryKey } from './types';

export const ReactComponent = React.PureComponent || React.Component;
export const orderedBreakpoints = ['col', 'xs', 'ms', 'sm', 'md', 'lg'];
export type Breakpoints = 'col' | 'xs' | 'ms' | 'sm' | 'md' | 'lg';

export const defaultProps = {
  direction: 'row',
  wrap: 'wrap',
  self: 'auto',
  grow: 0,
  shrink: 1,
  gap: 0,
  col: 12 as ColumnSize,
  debug: false,
};

export const calculateColumnWidth = (props: BoxProps, size: Breakpoints): ColumnSize => {
  const result = orderedBreakpoints.slice(0, orderedBreakpoints.indexOf(size) + 1).reduce(
    (acc, breakpoint) => (typeof props[breakpoint] === 'number' ? props[breakpoint] : acc),
    props.col
  );

  return typeof result === 'number' ? result : defaultProps.col;
};

export class Box extends ReactComponent<Partial<BoxProps & FlexProps>, void> {
  static defaultProps = defaultProps;

  render () {
    const { children } = this.props;
    const { className, style, testId } = this.props as BoxProps & FlexProps;

    return (
      <div className={className} data-test={testId} style={[this.columns(), this.styles(), style]}>
        {children}
      </div>
    );
  }

  getColumnSize(size: Breakpoints): ColumnSize {
    const { col, xs, ms, sm, md, lg } = this.props;
    return calculateColumnWidth({ col, xs, ms, sm, md, lg } as BoxProps, size);
  }

  columns(): React.CSSProperties[] {
    return orderedBreakpoints
      .map((breakpoint: MediaQueryKey) => this.getColumnStyle(breakpoint, this.getColumnSize(breakpoint)));
  }

  getColumnStyle(breakpoint: MediaQueryKey, columns: ColumnSize): React.CSSProperties {
    return { [`${mediaQueries[breakpoint]}`] : this.getColumnWidth(columns) };
  }

  getColumnWidth(column: number): React.CSSProperties {
    const { flex } = this.props;
    const { floor } = Math;

    if (column === 0) {
      return { width: 0, display: 'none' };
    }

    const width: number = column > 0 ? (floor(100000 / columns * column) / 1000) : 100;

    return { width: `${width}%`, display: flex ? 'flex' : 'block' };
  }

  styles(): React.CSSProperties {
    const { debug, direction, flex, gap, grow, order, self, shrink, wrap } = this.props;

    const debugStyles: Object = debug ? debugStyle() : {};
    const gapSize = gap === true ? defaultGap : gap;
    const gapStyles = typeof gapSize === 'number' && gapSize > 0 ? { paddingLeft: `${gapSize}px`, paddingRight: `${gapSize}px` } : {};
    const flexStyles = flex ? {
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap,
    } : {};

    return {
      display: 'block',
      alignSelf: self,
      flexGrow: grow,
      flexShrink: shrink,
      order,
      boxSizing: 'border-box',
      width: '100%',
      ...flexStyles,
      ...gapStyles,
      ...debugStyles,
    };
  }
}

export default Radium(Box);
