import React from 'react';

export default class AppAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentItem: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const clickedItemNumber = Number(e.target.closest('.accordion-item').getAttribute('id'));
    if (this.state.currentItem === clickedItemNumber) {
      this.setState({ currentItem: null });
    } else {
      this.setState({ currentItem: clickedItemNumber });
    }
  }

  render() {
    return (
      <div className="accordion col-6">
        {this.props.defaultArrayItems.map(accordionItem =>
          <div className="accordion-item" id={accordionItem.id} key={accordionItem.id}>
            <div onClick={this.handleClick} className="accordion-header border">
              <h3>{accordionItem.header}</h3>
            </div>
            <div className={`accordion-content ${this.state.currentItem === accordionItem.id ? 'on' : ''}`}>
              <p>{accordionItem.content}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
