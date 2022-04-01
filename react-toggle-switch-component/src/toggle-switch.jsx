import React from 'react';

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
    return (
        <div className='center'>
          <div onClick={this.handleClick} className={`outer ${this.state.isClicked ? 'on' : 'off'}-outer`}>
            <div className={`inner ${this.state.isClicked ? 'on' : 'off'}-inner`}></div>
          </div>
          <h4>{this.state.isClicked ? 'ON' : 'OFF'}</h4>
        </div>
    );
  }
}

export default ToggleSwitch;
