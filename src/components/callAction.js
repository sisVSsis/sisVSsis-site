import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

const sisVSsisLogo2 = 'https://i.imgur.com/TtjbxbM.png';
const sisVSsisLogo = 'https://i.imgur.com/iIBdmoD.png';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${sisVSsisLogo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '49.5em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      height: '50em',
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${sisVSsisLogo2})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '72em',
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${sisVSsisLogo2})`,
      height: '52em',
      width: '100%',
    },
  },
  heroText: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
      </Grid>
    </Grid>
  );
}
