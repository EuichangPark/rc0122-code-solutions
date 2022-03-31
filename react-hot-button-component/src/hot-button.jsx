import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numberClicked: this.state.numberClicked + 1 });
  }

  render() {
    let btnClass;
    if (this.state.numberClicked <= 3) {
      btnClass = 'btn btn-purple';
    } else if (this.state.numberClicked <= 6) {
      btnClass = 'btn btn-violet';
    } else if (this.state.numberClicked <= 9) {
      btnClass = 'btn btn-red';
    } else if (this.state.numberClicked <= 12) {
      btnClass = 'btn btn-orange';
    } else if (this.state.numberClicked <= 15) {
      btnClass = 'btn btn-yellow';
    } else {
      btnClass = 'btn';
    }
    return <button className={btnClass} onClick={this.handleClick}>Hot Button</button>;
  }
}

ReactDOM.render(
  <HotButton/>,
  document.querySelector('#root'));

export default HotButton;
