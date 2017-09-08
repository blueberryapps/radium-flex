import * as Radium from 'radium';
import * as React from 'react';
import { defaultGap } from './styles';
import { FlexProps } from './types';

export const ReactComponent = React.PureComponent || React.Component;

export class Flex extends ReactComponent<FlexProps, void> {
  static defaultProps = {
    align: 'stretch',
    columns: 12,
    content: 'stretch',
    debug: false,
    direction: 'row',
    gap: 0,
    justify: 'flex-start',
    wrap: 'wrap',
  };

  render() {
    const { className, children, debug, gap, style, columns } = this.props;

    const childrenWithGap = React.Children.map(children, (child: any) =>
      child && React.cloneElement(child, { columns, gap, debug }),
    );

    return (
      <div className={className} style={[this.styles(), style]}>{childrenWithGap}</div>
    );
  }

  styles(): React.CSSProperties {
    const { align, content, direction, gap, justify, wrap } = this.props;

    const gapSize = gap === true ? defaultGap : gap;
    const gapStyles = typeof gapSize === 'number' && gapSize > 0 ? { marginLeft: `-${gapSize}px`, marginRight: `-${gapSize}px` } : {};

    return {
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: justify,
      alignItems: align,
      alignContent: content,
      ...gapStyles,
    };
  }
}

export default Radium(Flex);
