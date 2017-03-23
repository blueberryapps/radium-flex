import * as React from 'react';

export interface ContainerProps {
  width: string;
  paddingLeft: string;
  paddingRight: string;
}

export const ReactComponent = React.PureComponent || React.Component;

export default class Container extends ReactComponent<ContainerProps, void> {
  static defaultProps = {
    width: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px'
  };

  render() {
    const { children } = this.props;
    const style = this.style(this.props);

    return (
      <div style={style}>
        {children}
      </div>
    );
  }

  style = ({ width, paddingLeft, paddingRight }: ContainerProps) => ({
    width,
    paddingLeft,
    paddingRight,
    marginLeft: 'auto',
    marginRight: 'auto',
  })
}
