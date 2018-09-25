import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

// import MenuIcon from '@material-ui/icons/Menu';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps'
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded'

import TemporaryDrawer from './TemporaryDrawer'
const styles = theme => ({
  root: {
    display: 'block',
    // width: '100%',
    backgroundColor: 'white',
    color: 'white',
  },
  toolbar: {
    backgroundColor: '#fafafa',
    height: '56px',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    zIndex: 1020,
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    color: 'black',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    cursor: 'pointer',
    width: '65px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    border: '1px solid',
    borderRadius: '0 2px 2px 0',
    backgroundColor: 'grey',
  },
  inputRoot: {
    color: 'grey',
    width: '100%',
    border: "1px solid",
    padding: "2px 6px",
    borderRadius: '2px 0 0 2px',
    boxShadow: "inset 0 1px 2px",
    // backgroundColor: "white",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} color="grey" aria-label="Open drawer">
              <TemporaryDrawer className={classes.menuButton}/>
            </IconButton>
            <Typography className={classes.title} variant="title" color="inherit" noWrap>
              YouTube
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder="Search"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="grey">
                  <VideoCallRoundedIcon />
              </IconButton>
              <IconButton color="grey">
                  <AppsIcon />
              </IconButton>
              <IconButton color="grey">
                <Badge className={classes.margin} badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="grey">
                <Badge className={classes.margin} badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="grey"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);