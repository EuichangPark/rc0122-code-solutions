import React from 'react';
import ReactDOM from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let offOuter;
    let offInner;
    let onOuter;
    let onInner;
    let center;
    if (this.state.isClicked === false) {
      offOuter = 'outer off-outer';
      offInner = 'inner off-inner';
      center = 'center';
      return (
        <div className={center}>
          <div onClick={this.handleClick} className={offOuter}>
            <div className={offInner}></div>
          </div>
          <h4>OFF</h4>
        </div>
      );
    }
    if (this.state.isClicked === true) {
      onOuter = 'outer on-outer';
      onInner = 'inner on-inner';
      center = 'center';
      return (
        <div className={center}>
          <div onClick={this.handleClick} className={onOuter}>
            <div className={onInner}></div>
          </div>
          <h4>ON</h4>
        </div>
      );
    }
  }
}

ReactDOM.render(<ToggleSwitch />,
  document.querySelector('#root'));

export default ToggleSwitch;
