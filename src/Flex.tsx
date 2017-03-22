import * as Radium from 'radium';
import * as React from 'react';
import { defaultGap } from './styles';
import { FlexProps } from './types';

const ReactComponent = React.PureComponent || React.Component;

export class Flex extends ReactComponent<FlexProps, void> {
  static defaultProps = {
    direction: 'row',
    wrap: 'wrap',
    justify: 'flex-start',
    align: 'stretch',
    content: 'stretch',
    gap: 0,
    debug: false,
  };

  render () {
    const { className, children, debug, gap, style } = this.props;

    const childrenWithGap = React.Children.map(children, (child: any) =>
      React.cloneElement(child, { gap, debug }),
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
