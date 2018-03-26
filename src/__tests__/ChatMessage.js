/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMessage from '../components/ChatPage/Chat/ChatMessage';

jest.mock('moment', () => () => ({ fromNow: () => 'string' }));

describe('<ChatMessage />', () => {
  const props = {
    sender: {
      _id: '123456789',
      firstName: 'John',
      lastName: 'Doe',
      username: 'user',
    },
    content: 'string',
    fromMe: true,
    statusMessage: true,
    createdAt: 'string',
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMessage {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<ChatMessage {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
