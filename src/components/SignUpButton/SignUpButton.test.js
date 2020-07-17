import React from 'react';
import ReactDOM from 'react-dom';
import SignUpButton from './SignUpButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});