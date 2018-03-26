/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Avatar from '../components/ChatPage/Avatar';

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar title="John Doe" colorFrom="John Doe" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Avatar title="John Doe" colorFrom="John Doe" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
