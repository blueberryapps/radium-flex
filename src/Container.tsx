import * as React from 'react';

export default class Container extends React.PureComponent<void, void> {
  render() {
    const { children } = this.props;
    const style = this.getStyle(Container.style);

    return (
      <div style={style}>
        {children}
      </div>
    );
  }

  static style = ({ sizes }) => ({
    width: sizes.container,
    paddingLeft: sizes.medium,
    paddingRight: sizes.medium,
    marginLeft: 'auto',
    marginRight: 'auto',
  })
}
