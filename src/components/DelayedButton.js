// Code CoordinatesButton Component Here
import React from 'react';
class DelayedButton extends React.Component {
  clickHandler = (event) => {
    const ev = event;
    setTimeout(this.props.onDelayedClick, this.props.delay, ev);
  }
  render() {
    return (
      <button onClick={ this.clickHandler }>Button</button>
    )
  }
}
export default DelayedButton;
// Code DelayedButton Component Here
