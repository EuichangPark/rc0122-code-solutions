import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: true,
      countingTime: 0,
      intervalId: null,
      timesClicked: 0
    };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePlayClick() {
    if (this.state.timesClicked === 0) {
      const intervalId = setInterval(
        () => this.setState({
          isStopped: false,
          countingTime: this.state.countingTime + 1
        }), 1000);
      this.setState({ intervalId, timesClicked: this.state.timesClicked + 1 });
    }
  }

  handlePauseClick() {
    this.setState({ isStopped: true, timesClicked: 0 });
    clearInterval(this.state.intervalId);
  }

  handleReset() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({
        isStopped: true,
        countingTime: 0,
        intervalId: null
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='circle' onClick={this.handleReset}>{this.state.countingTime}</div>
        <div className='icon-wrapper'>
          <span className='icon-box' onClick={this.state.isStopped ? this.handlePlayClick : this.handlePauseClick}>
            <i className={`fa-solid fa-${this.state.isStopped ? 'play' : 'pause'}`}></i>
          </span>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Stopwatch />, document.querySelector('#root'));

export default Stopwatch;
