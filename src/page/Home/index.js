import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useTheme, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Websites from '../../images/assets/Websites.png';
import CallAction from '../../components/callAction';

import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';

const useStyles = makeStyles((theme) => ({
  summary: {
    textAlign: 'center',
    maxWidth: '80%',
    width: '80%',
    margin: 'auto',
    marginBottom: '-9.5rem',
    position: 'relative',
    backgroundColor: 'white',
    color: 'white',
    borderRadius: '14px',
    boxShadow: '0 1px 18px 10px rgba(0, 0, 0, 0.25)',
    marginTop: '-2.5em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '-7rem',
      marginTop: '-1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '-6.5rem',
      marginTop: '-1em',
    },
  },
  text: {
    fontSize: '4em',
    fontFamily: 'Courgette',
    background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #7c4dff 50%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = useCallback(() => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  }, [dispatch, history]);

  useEffect((logout) => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, user?.token, logout]);

  return (
    <div>
      <section className={classes.summary}>
      {user?.result ? (
        <h2 className={classes.text}>Welcome to sisVSsis, {user?.result.name}</h2>) : (<h2 className={classes.text}>Welcome to sisVSsis</h2>)}
      </section>
      <br />
      <br />
      <br />
      <CallAction />
      <br />
      <br />
      <Typography
        variant="h4"
        style={{ color: '#e91e63', textAlign: 'center' }}
      >
        Our Projects
      </Typography>
      <br />
      <br />
      <Grid container direction="row">
        <Grid item container direction="column" sm>
          <img
            src={Websites}
            alt="projects"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: matchesXS ? '23em' : '35em',
              height: matchesXS ? '16em' : '35em',
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          sm
          style={{
            alignItems: matchesMD ? 'center' : '',
          }}
        >
          <Typography style={{ color: '#40c4ff' }}>Websites</Typography>
          <Typography
            style={{ color: '#7c4dff', width: matchesXS ? '20em' : '35em' }}
          >
            {' '}
            We had made so many beautiful, working websites. We are still
            developers but we made our website with html, css react, nextjs etc.
            Come and see our various type website.{' '}
            <a href="/projects/websites">See Websites</a>
          </Typography>
          <br />
          <Typography style={{ color: '#40c4ff' }}>Games</Typography>
          <Typography
            style={{ color: '#7c4dff', width: matchesXS ? '20em' : '35em' }}
          >
            We also made mini, fun games to play, that you won't get bored by
            seeing only our websites. <a href="/projects/games">See Games</a>
          </Typography>
          <br />
          <Typography style={{ color: '#40c4ff' }}>More</Typography>
          <Typography
            style={{ color: '#7c4dff', width: matchesXS ? '20em' : '35em' }}
          >
            It's not the end, we got <a href="/projects/More">More</a>
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
    </div>
  );
}
