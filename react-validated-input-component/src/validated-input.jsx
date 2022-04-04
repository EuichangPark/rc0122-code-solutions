import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: '',
      iconClass: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleValidation() {
    if (this.state.value.length === 0) {
      this.setState({
        error: 'A password is required',
        iconClass: 'fas fa-times icon-width'
      });
    } else if (this.state.value.length < 8) {
      this.setState({
        error: 'Password must be at least 8 digits',
        iconClass: 'fas fa-times'
      });
    } else {
      this.setState({
        error: '',
        iconClass: 'fas fa-check'
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.handleValidation();
    if (isValid) {
      // eslint-disable-next-line no-console
      console.log(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='password' className='block'>Password</label>
        <input onChange={this.handleChange} type='password' name='password' value={this.state.value} id='password'/>
        <i className={this.state.iconClass}></i>
        <p className='error-message'>{this.state.error}</p>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
