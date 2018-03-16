import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import UserMenu from './UserMenu';
import Avatar from '../Avatar';
import ChatMenu from './ChatMenu';

const styles = theme => ({
  chatheader: {
    position: 'absolute',
    width: `calc(100% - 320px)`,
  },
  Toolbar: {
    'justify-content': 'space-between'
  },
  titleContainer: {
    display: 'flex',
    'align-items': 'center'
  },
  chatTitle: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
})

const ChatHeader = ({ classes, activeUser, logout, editUser, activeChat, leaveChat, deleteChat, }) => (
  <AppBar className={classes.chatheader}>
    <Toolbar className={classes.Toolbar}>
      {activeChat ? (
        <div className={classes.titleContainer}>
          <Avatar title={activeChat.title} />
          <Typography
            className={classes.chatTitle}
            variant="title"
            color="inherit"
            noWrap>
            {activeChat.title}
          </Typography>
          <ChatMenu
            activeUser={activeUser}
            onLeaveClick={() => leaveChat(activeChat._id)}
            onDeleteClick={() => deleteChat(activeChat._id)}
          />
        </div>
      ) : (
          <Typography
            className={classes.chatTitle}
            variant="title"
            color="inherit"
            noWrap>
            Doge Chat Such Many React
          </Typography>
        )}
      <UserMenu
        activeUser={activeUser}
        onLogoutClick={logout}
        onEditProfileClick={editUser}
      />
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(ChatHeader);
