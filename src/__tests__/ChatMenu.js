/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMenu from '../components/ChatPage/ChatHeader/ChatMenu';

const props = {
  onLeaveClick: jest.fn(),
  onDeleteClick: jest.fn(),
  activeUser: {
    _id: '12345',
    username: 'me',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  disabled: false,
};

describe('<ChatMenu />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMenu {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders !chatMember', () => {
    const tree = renderer
      .create(<ChatMenu
        {...props}
        activeUser={{
            _id: '12345',
            username: 'me',
            isMember: true,
            isCreator: false,
            isChatMember: false,
          }}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatMenu {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
