import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, useMediaQuery } from '@material-ui/core';

import Name from './image/Seher/website/Name.png';
import CupAnimation from './image/Safin/games/CupAnimation.png';
import DifferentDinosaurs from './image/Safin/website/DifferentDinosaurs.png';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xl')]: {
      width: 331,
    },
    [theme.breakpoints.down('lg')]: {
      width: 320,
    },
    [theme.breakpoints.down('md')]: {
      width: 310,
    },
    [theme.breakpoints.down('sm')]: {
      width: 303,
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  media: {
    height: 200,
  },
}));

export default function MoreCards() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  /* ------ More ------ */
  const More = [
    {
      image: `${Name}`,
      title: 'EnterName, Activity',
      MadeBy: 'Seher Mahmud',
      href: 'https://form-name-seher-demo.netlify.app',
    },
    {
      image: `${CupAnimation}`,
      title: 'Cup, animation',
      MadeBy: 'Safin Mahmud',
      href: 'https://cup-animation.netlify.app/',
    },
    {
      image: `${DifferentDinosaurs}`,
      title: 'Different Dinosaurs, Activity',
      MadeBy: 'Safin Mahmud',
      href: 'https://different-dinosaurs.netlify.app/',
    },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ image, title, MadeBy, href }) => {
      return (
        <Card
          elevation={10}
          key={href}
          className={classes.root}
          style={{
            marginLeft: '1em',
            marginRight: '1em',
            marginBottom: '1.8em',
          }}
        >
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                By: {MadeBy}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target="_blank" href={href} size="small" color="primary">
              Visit {title}
            </Button>
          </CardActions>
        </Card>
      );
    });

  return (
    <div>
      <Typography
        style={{ color: '#ff4081', marginLeft: '0.5em', marginBottom: '0.8em' }}
        variant={matchesSM ? 'h5' : 'h4'}
      >
        Other websites
      </Typography>{' '}
      {matchesXS ? (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={10}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>{More}</div>
          </Grid>
        </Grid>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>{More}</div>
      )}
    </div>
  );
}
