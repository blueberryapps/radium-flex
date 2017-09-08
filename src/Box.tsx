import * as Radium from 'radium';
import * as React from 'react';
import { columns as columnsStyle, debugStyle, defaultGap, mediaQueries } from './styles';
import { BoxProps, FlexProps, MediaQueryKey } from './types';

export const ReactComponent = React.PureComponent || React.Component;
export const orderedBreakpoints = ['col', 'xs', 'ms', 'sm', 'md', 'lg'];
export type Breakpoints = 'col' | 'xs' | 'ms' | 'sm' | 'md' | 'lg';

export const defaultProps = {
  col: 12,
  debug: false,
  direction: 'row',
  gap: 0,
  grow: 0,
  self: 'auto',
  shrink: 1,
  wrap: 'wrap',
};

export const calculateColumnWidth = (props: BoxProps, size: Breakpoints): number => {
  const result = orderedBreakpoints.slice(0, orderedBreakpoints.indexOf(size) + 1).reduce(
    (acc, breakpoint) => (typeof props[breakpoint] === 'number' ? props[breakpoint] : acc),
    props.col
  );

  return typeof result === 'number' ? result : defaultProps.col;
};

export class Box extends ReactComponent<Partial<BoxProps & FlexProps>, void> {
  static defaultProps = defaultProps;

  render() {
    const { children } = this.props;
    const { className, style, testId } = this.props as BoxProps & FlexProps;

    return (
      <div className={className} data-test={testId} style={[this.columns(), this.styles(), style]}>
        {children}
      </div>
    );
  }

  getColumnSize(size: Breakpoints): number {
    const { col, xs, ms, sm, md, lg } = this.props;
    return calculateColumnWidth({ col, xs, ms, sm, md, lg } as BoxProps, size);
  }

  columns(): React.CSSProperties[] {
    return orderedBreakpoints
      .map((breakpoint: MediaQueryKey) => this.getColumnStyle(breakpoint, this.getColumnSize(breakpoint)));
  }

  getColumnStyle(breakpoint: MediaQueryKey, columns: number): React.CSSProperties {
    return { [`${mediaQueries[breakpoint]}`]: this.getColumnWidth(columns) };
  }

  getColumnWidth(column: number): React.CSSProperties {
    const { flex, columns } = this.props;
    const { floor } = Math;
    const colCount = columns || columnsStyle;

    if (column === 0) {
      return { width: 0, display: 'none' };
    }

    const width: number = column > 0 ? (floor(100000 / colCount * column) / 1000) : 100;

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
