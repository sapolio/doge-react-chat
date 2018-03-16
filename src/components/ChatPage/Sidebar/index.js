import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import ChatList from './ChatList';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';

import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';
import NewChatButton from './NewChatButton';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  
  chatList: {
      height: 'calc(100% - 56px)',
      overflowY: 'scroll',
    },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
});

class Sidebar extends React.Component {

  state = {
    navPosition: 0,
    searchValue: ''
  };

  handleTabChange = (event, value) => {
    this.setState({navPosition: value});
  };
  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }
  filterChats = (chats) => {
    const { searchValue } = this.state;

    return chats
      .filter(chat => chat.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      )
      .sort((one, two) =>
        one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1
      );
  }

render() {

  const { classes, chats, createChat } = this.props;
  const { navPosition, searchValue } = this.state;

  return (   
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <TextField
          fullWidth
          margin="normal"
          placeholder="Search chats..."
            value={searchValue}
            onChange={this.handleSearchChange}
        />
      </div>
      <Divider />
      <ChatList
        chats={this.filterChats(navPosition === 1 ? chats.all : chats.my)}
        activeChat={chats.active}
      />
      <NewChatButton 
        createChat={createChat}
      />
      <BottomNavigation 
        showLabels
        value={navPosition}
        onChange={this.handleTabChange}
      >
        <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
      </BottomNavigation>
    </Drawer>
  )}
};

export default withStyles(styles)(Sidebar);
