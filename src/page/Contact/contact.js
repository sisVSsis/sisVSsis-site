import React, { useState, useEffect } from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Posts from './Posts';
import { useDispatch } from 'react-redux';
import Form from './Form/Form';
import { getPosts } from '../../actions/chat';
import Email from './email';
import RecipeReviewCard from './Relatedsite/sites';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '0.5em',
    marginLeft: '0.5em',
    [theme.breakpoints.down('xl')]: {
      width: 800,
    },
    [theme.breakpoints.down('lg')]: {
      width: 700,
    },
    [theme.breakpoints.down('md')]: {
      width: 430,
    },
    [theme.breakpoints.down('sm')]: {
      width: 400,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  root1: {
    marginRight: '0.5em',
    marginLeft: '0.5em',
    [theme.breakpoints.down('xl')]: {
      width: 500,
    },
    [theme.breakpoints.down('lg')]: {
      width: 450,
    },
    [theme.breakpoints.down('md')]: {
      width: 400,
    },
    [theme.breakpoints.down('sm')]: {
      width: 400,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div style={{ marginTop: '3em' }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid container direction="row" alignItems="center">
          <Grid
            item
            container
            direction="column"
            sm
            style={{ marginRight: '1em', marginLeft: '1em' }}
          ></Grid>
          <Grid
            item
            container
            direction="column"
            sm
            style={{ marginRight: '1em', marginLeft: '1em' }}
          >
            <div
              style={{
                border: '5px solid pink',
                height: '40em',
                overflowY: 'scroll',
              }}
              className={classes.root}
            >
              <Posts setCurrentId={setCurrentId} />
            </div>
          </Grid>
          <Grid
            item
            container
            direction="column"
            sm
            style={{ marginRight: '1em', marginLeft: '1em' }}
          >
            {matchesSM ? <div></div> : <Email />}
            <div
              style={{ border: '2px solid pink', height: '22em' }}
              className={classes.root1}
            >
              <div style={{ margin: '1em' }}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {matchesSM ? <Email /> : <div></div>}
      <RecipeReviewCard />
    </div>
  );
}
