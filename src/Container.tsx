import * as React from 'react';

interface ContainerProps {
  width: string;
  paddingLeft: string;
  paddingRight: string;
}

export default class Container extends React.PureComponent<ContainerProps, void> {
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
