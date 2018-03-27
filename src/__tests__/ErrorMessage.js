/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from '../components/ErrorMessage';

const props = {
  error: new Error('string'),
};

describe('<ErrorMessage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorMessage {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
