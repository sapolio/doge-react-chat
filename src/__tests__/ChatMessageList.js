/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMessageList from '../components/ChatPage/Chat/ChatMessageList';

jest.mock('moment', () => () => ({ fromNow: () => '2 days ago' }));

const props = {
  messages: [
    {
      _id: '123456789',
      chatId: '12345',
      content: 'Hello, World!',
      sender: {
        _id: '12345',
        username: 'me',
      },
      createdAt: 'string',
    },
    {
      _id: '321bar123',
      chatId: '12345',
      content: 'Hello, React!',
      sender: {
        _id: '54321',
        username: 'someone',
      },
      createdAt: 'string',
    },
  ],
  activeUser: {
    _id: '12345',
    username: 'me',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
};

describe('<ChatMessageList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMessageList {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders no messages', () => {
    const tree = renderer
      .create(<ChatMessageList activeUser={props.activeUser} messages={[]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders with messages', () => {
    const tree = renderer.create(<ChatMessageList {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
