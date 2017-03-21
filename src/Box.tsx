import * as Radium from 'radium';
import * as React from 'react';
import { columns, debugStyle, defaultGap, mediaQueries } from './styles';
import { BoxProps, ColumnSize, FlexProps, MediaQueryKey } from './types';

class Box extends React.PureComponent<Partial<BoxProps & FlexProps>, void> {
  static defaultProps: BoxProps & FlexProps = {
    direction: 'row',
    wrap: 'wrap',
    self: 'auto',
    grow: 0,
    shrink: 1,
    gap: 0,
    debug: false,
    to: '',
  };

  render () {
    const { children } = this.props;
    const { className, style, testId, to } = this.props as BoxProps & FlexProps;

    return (
      <div className={className} data-test={testId} style={[this.columns(), this.styles(), style]}>
        {children}
      </div>
    );
  }

  columns(): React.CSSProperties[] {
    return ['col', 'xs', 'ms', 'sm', 'md', 'lg']
      .filter((breakpoint: MediaQueryKey) => typeof this.props[breakpoint] === 'number')
      .map((breakpoint: MediaQueryKey) => this.getColumnStyle(breakpoint, (this.props[breakpoint] as ColumnSize)));
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
