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

const MonterKiller = 'https://i.imgur.com/i8IbuYC.png';
const RPS = 'https://i.imgur.com/r6TlssV.png';
const dino = 'https://i.imgur.com/91OHEL0.png';

const UFOhunter = 'https://i.imgur.com/CBbMzuu.png';
const MemoryGame = 'https://i.imgur.com/RFEjQ4e.png';
const SpaceImadrsGame = 'https://i.imgur.com/vPqHAAu.png';
const FroggerGame = 'https://i.imgur.com/QZuqGy1.png';
const WhackAMoleGame = 'https://i.imgur.com/cEaDMSO.png';
const SnakeGame = 'https://i.imgur.com/hsklzu2.png';
const ConnectFourGame = 'https://i.imgur.com/U9KhBDk.png';
const Tetris = 'https://i.imgur.com/2dlgfnW.png';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xl')]: {
      width: 331,
    },
    [theme.breakpoints.down('lg')]: {
      width: 310,
    },
    [theme.breakpoints.down('md')]: {
      width: 313,
    },
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  media: {
    height: 200,
  },
}));

export default function WebsiteCards() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  /* ------ AllGames ------ */
  const AllGames = [
    {
      image: `${UFOhunter}`,
      title: 'UFO Hunter',
      MadeBy: 'Safin Mahmud',
      href: 'https://ufo-hunter.netlify.app/',
    },
    {
      image: `${MonterKiller}`,
      title: 'MonterKiller',
      MadeBy: 'Seher Mahmud',
      href: 'https://react-beach-resort-recording-seher.netlify.app',
    },
    {
      image: `${RPS}`,
      title: 'Rock Paper Sissors',
      MadeBy: 'Seher Mahmud',
      href: 'http://react-phone-store-recording-seher.netlify.app/',
    },
    {
      image: `${dino}`,
      title: 'Dino',
      MadeBy: 'Seher Mahmud',
      href: 'https://seher-dino.netlify.app',
    },
    {
      image: `${Tetris}`,
      title: 'Tetris Game',
      MadeBy: 'Safin Mahmud',
      href: 'https://tetris-game-safin.netlify.app/',
    },
    {
      image: `${MemoryGame}`,
      title: 'Memory Game',
      MadeBy: 'Safin Mahmud',
      href: 'https://memory-game-safin.netlify.app/',
    },
    {
      image: `${SpaceImadrsGame}`,
      title: 'SpaceImadrs',
      MadeBy: 'Safin Mahmud',
      href: 'https://space-imadrs-game-safin.netlify.app',
    },
    {
      image: `${FroggerGame}`,
      title: 'Frogger',
      MadeBy: 'Safin Mahmud',
      href: 'https://frogger-game-safin.netlify.app',
    },
    {
      image: `${WhackAMoleGame}`,
      title: 'WhackAMole',
      MadeBy: 'Safin Mahmud',
      href: 'https://whack-a-mole-game-safin.netlify.app',
    },
    {
      image: `${SnakeGame}`,
      title: 'Snake Game',
      MadeBy: 'Safin Mahmud',
      href: 'https://snake-game-safin.netlify.app',
    },
    {
      image: `${ConnectFourGame}`,
      title: 'ConnectFour',
      MadeBy: 'Safin Mahmud',
      href: 'https://connect-four-game-safin.netlify.app',
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
        Enjoy our mini Games.
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
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {AllGames}
            </div>
          </Grid>
        </Grid>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>{AllGames}</div>
      )}
    </div>
  );
}
