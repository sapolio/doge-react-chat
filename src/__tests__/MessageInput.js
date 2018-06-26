/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessageInput from '../components/ChatPage/Chat/MessageInput';

const props = {
  showJoinButton: false,
  disabled: false,
  onJoinButtonClick: jest.fn(),
  sendMessage: jest.fn(),
};

describe('<MessageInput />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageInput {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
    ReactDOM.render(<MessageInput {...props} showJoinButton disabled />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders no button', () => {
    const tree = renderer.create(<MessageInput {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders no button disabled', () => {
    const tree = renderer.create(<MessageInput {...props} disabled />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with button', () => {
    const tree = renderer.create(<MessageInput {...props} showJoinButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with button disabled', () => {
    const tree = renderer.create(<MessageInput {...props} showJoinButton disabled />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
