import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {
  Divider,
  IconButton,
  SwipeableDrawer,
  Button,
  useMediaQuery,
  Grid,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { GoProject } from 'react-icons/go';
import InfoIcon from '@material-ui/icons/Info';
import { FaPaperPlane } from 'react-icons/fa';
import { RiGalleryFill } from 'react-icons/ri';
import { AiFillYoutube } from 'react-icons/ai';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FaGithub, FaStackOverflow } from 'react-icons/fa';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch } from 'react-redux';
import * as actionType from '../constants/actionTypes';
import decode from 'jwt-decode';

const drawerWidth = 275;

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sisVSsis: {
    fontFamily: 'Merienda One',
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #7c4dff 50%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  title: {
    flexGrow: 1,
    fontSize: '2em',
    color: '#f06292',
    fontFamily: 'Merienda One',
    [theme.breakpoints.down('md')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
    },
  },
  icon: {
    height: '2.3em',
    width: '2.5em',
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '11.9em',
    right: '1.5em',
    [theme.breakpoints.down('sm')]: {
      right: '0.6em',
      marginTop: '11.7em',
    },
  },
  link: {
    fontFamily: 'Handlee',
    textTransform: 'none',
    fontSize: '1.2em',
    fontWeight: 600,
    borderRadius: 0,
    color: '#e91e63',
    '&:hover': {
      background: '#FFCCE6',
      color: 'white',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
  appbar: {
    height: '4em',
    [theme.breakpoints.down('md')]: {
      height: '4em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '4em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3.7em',
    },
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
    color: 'white',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ElevateAppBar(props) {
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = useCallback(() => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  }, [dispatch, history]);

  useEffect(
    (logout) => {
      const token = user?.token;

      if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

      setUser(JSON.parse(localStorage.getItem('profile')));
    },
    [location, user?.token, logout]
  );

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  const prevOpen = React.useRef(openMenu);
  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  const AppIcons = [
    {
      href: 'https://github.com/sisVSsis',
      icon: <FaGithub style={{ color: '#42a5f5' }} />,
      title: 'github',
    },
    {
      href: 'https://stackoverflow.com/users/16891453/seher-mahmud',
      icon: <FaStackOverflow style={{ color: '#ffa726' }} />,
      title: 'Our Stackoverflow',
    },
    {
      href: 'https://www.youtube.com/channel/UCjA0qLX3fqLnrj4lu-VzhNA?view_as=subscriber',
      icon: <AiFillYoutube style={{ color: '#ef5350' }} />,
      title: 'Our youtube channel',
    },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ href, icon, title }) => {
      return (
        <Tooltip title={title}>
          <Grid
            item
            component={'a'}
            href={href}
            key={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              {icon}
            </IconButton>
          </Grid>
        </Tooltip>
      );
    });

  /* ------ Header ------ */
  const headerLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'AboutUs', href: '/about' },
    { label: 'ContactUs', href: '/contact' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Button
          key={href}
          style={{ color: 'white', textTransform: 'none', fontSize: '1.3em' }}
        >
          <a
            href={href}
            style={{
              textDecoration: 'none',
              textTransform: 'none',
              color: 'white',
              fontFamily: 'Handlee',
              fontWeight: 'bold',
              fontSize: '1.4rem',
            }}
          >
            {label}
          </a>
        </Button>
      );
    });

  const header = (
    <Grid container direction="row" justify="flex-end">
      {matchesSM ? null : <div>{headerLinks}</div>}
      {user?.result ? (
        <React.Fragment>
          <div>
            <Button
              style={{
                color: 'white',
                textTransform: 'none',
                fontSize: '1.3em',
                fontFamily: 'Handlee',
                fontWeight: 'bold',
              }}
            >
              {user?.result.name}
            </Button>
          </div>
          <div>
            <IconButton
              ref={anchorRef}
              aria-controls={openMenu ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <MoreVertIcon />
            </IconButton>
            <Popper
              open={openMenu}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={openMenu}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem>{user?.result.name}</MenuItem>
                        <MenuItem>{user?.result.email}</MenuItem>
                        <Divider
                          style={{
                            marginBottom: '0.8em',
                            marginRight: '1em',
                            marginLeft: '1em',
                          }}
                        />
                        <MenuItem>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={logout}
                          >
                            Logout
                          </Button>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </React.Fragment>
      ) : (
        <Button
          key="/auth"
          style={{
            color: 'white',
            textTransform: 'none',
            fontSize: '1.3em',
          }}
        >
          <a
            href="/auth"
            style={{
              textDecoration: 'none',
              textTransform: 'none',
              color: 'white',
              fontFamily: 'Handlee',
              fontWeight: 'bold',
              fontSize: '1.4rem',
            }}
          >
            Sign In
          </a>
        </Button>
      )}
    </Grid>
  );

  /* ------ Drawer ------ */
  const drawerLinks1 = [
    {
      label: 'Home',
      href: '/',
      icon: <HomeIcon style={{ color: '#651fff' }} />,
    },
    {
      label: 'Projects',
      href: '/projects',
      icon: <GoProject style={{ color: '#651fff' }} />,
    },
    {
      label: 'Gallery',
      href: '/gallery',
      icon: <RiGalleryFill style={{ color: '#651fff' }} />,
    },
    {
      label: 'Videos',
      href: '/videos',
      icon: <AiFillYoutube style={{ color: '#651fff' }} />,
    },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href, icon }) => {
      return (
        <a
          href={href}
          underline="none"
          className="padding: 0"
          style={{
            color: '#e91e63',
            textDecoration: 'none',
          }}
        >
          <List style={{ padding: 0 }}>
            <ListItem
              key={href}
              button
              color="inherit"
              className={classes.link}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </List>
        </a>
      );
    });

  const drawerLinks2 = [
    {
      label: 'About Us',
      href: '/about',
      icon: <InfoIcon style={{ color: '#651fff' }} />,
    },
    {
      label: 'Contact Us',
      href: '/contact',
      icon: <FaPaperPlane style={{ color: '#651fff' }} />,
    },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href, icon }) => {
      return (
        <a
          href={href}
          underline="none"
          className="padding: 0"
          style={{
            color: '#e91e63',
            textDecoration: 'none',
          }}
        >
          <List style={{ padding: 0 }}>
            <ListItem
              key={href}
              button
              color="inherit"
              className={classes.link}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </List>
        </a>
      );
    });

  const drawer = (
    <SwipeableDrawer
      anchor="left"
      open={open}
      // classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.toolbarMargin} />
      <div className={classes.drawerHeader}>
        <a
          href="/"
          style={{
            textDecoration: 'none',
            fontFamily: 'Merienda One',
          }}
        >
          {' '}
          <Typography className={classes.sisVSsis} variant="h3">
            sisVSsis
          </Typography>
        </a>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider
        color="secondary"
        style={{ marginLeft: '1em', marginRight: '1em' }}
      />
      {user?.result ? (
        <React.Fragment>
          <div>
            <Typography
              style={{ marginLeft: '0.8em', fontSize: '1.3em' }}
              variant="h6"
            >
              {user?.result.name}
            </Typography>
            <Typography
              style={{ marginLeft: '0.8em', fontSize: '1.3em' }}
              variant="h6"
            >
              {user?.result.email}
            </Typography>
          </div>
          <Divider />
          <br />
        </React.Fragment>
      ) : (
        <div></div>
      )}
      {drawerLinks1}
      <Divider />
      <p
        style={{
          fontSize: '0.9em',
          fontWeight: 300,
          marginLeft: '1em',
          marginBottom: '1.5em',
          marginTop: '1em',
          color: '#616161',
        }}
      >
        Communication
      </p>
      {drawerLinks2}
      <Divider />
      <div style={{ width: '100%', position: 'relative', marginLeft: '3em' }}>
        {AppIcons}
      </div>
      {user?.result ? (
        <React.Fragment>
          <Divider />
          <p
            style={{
              fontSize: '0.9em',
              fontWeight: 300,
              marginLeft: '1em',
              marginBottom: '1.5em',
              marginTop: '1em',
              color: '#616161',
            }}
          >
            Danger gone
          </p>
          <Button variant="contained" color="secondary" onClick={logout}>
            Logout
          </Button>
        </React.Fragment>
      ) : (
        <div></div>
      )}
      <br />
      <br />
    </SwipeableDrawer>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar elevation={3} className={classes.appbar}>
          <Toolbar style={{ height: 0 }}>
            <IconButton onClick={() => setOpen(!open)} disableRipple>
              <MenuIcon className={classes.drawerIcon} />
            </IconButton>
            <div></div>

            <a
              href="/"
              style={{
                textDecoration: 'none',
              }}
            >
              {' '}
              <Typography variant="h3" className={classes.sisVSsis}>
                sisVSsis
              </Typography>
            </a>
            {matches ? <div></div> : header}
            {drawer}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
