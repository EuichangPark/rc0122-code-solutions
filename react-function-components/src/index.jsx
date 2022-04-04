import React from 'react';
import ReactDOM from 'react-dom';

function CustomBtn() {
  return <button type="button">Click Me!</button>;
}

ReactDOM.render(<CustomBtn/>, document.querySelector('#root'));
