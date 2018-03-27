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
    fromMe: false,
    statusMessage: false,
    createdAt: 'string',
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMessage {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders status message', () => {
    const tree = renderer.create(<ChatMessage {...props} statusMessage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders not from me', () => {
    const tree = renderer.create(<ChatMessage {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders from me', () => {
    const tree = renderer.create(<ChatMessage {...props} fromMe />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders username only', () => {
    const tree = renderer
      .create(<ChatMessage
        {...props}
        sender={{
            _id: '123456789',
            username: 'user',
          }}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
