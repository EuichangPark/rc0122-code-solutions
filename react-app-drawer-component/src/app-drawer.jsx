import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.className === 'background-off') {
      return;
    }
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const items = [
      {
        class: 'h1',
        title: 'Menu'
      },
      {
        title: 'About'
      },
      {
        title: 'Get Started'
      },
      {
        title: 'Sign In'
      }
    ];
    return (
      <div>
        <i onClick={this.handleClick} className='fas fa-align-justify ms-2 mt-2 fa-2x'></i>
        <div className={`background ${this.state.isOpened ? 'on' : ''}`} onClick={this.handleClick}></div>
        <nav className={`sidebar ${this.state.isOpened ? 'on' : ''}`}>
          <ul onClick={this.handleClick} className='list-unstyled'>
            {items.map((item, i) => <li key={i}><a className={item.class || 'h5'} href='#'>{item.title}</a></li>)}
          </ul>
        </nav>
      </div>
    );
  }
}
