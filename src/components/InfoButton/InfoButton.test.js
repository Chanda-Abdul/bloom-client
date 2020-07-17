import React from 'react';
import ReactDOM from 'react-dom';
import InfoButton from './InfoButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});