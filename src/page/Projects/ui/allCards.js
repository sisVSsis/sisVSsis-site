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

const BeachResort = 'https://i.imgur.com/aLeKRQl.png';
const PhoneStore = 'https://i.imgur.com/6bnl1c5.png';
const MOMessage = 'https://i.imgur.com/DOvehAa.png';
const ExcerTracker = 'https://i.imgur.com/QmKz2Kk.png';
const fooder = 'https://i.imgur.com/SCx8CDB.png';
const MyMovieList = 'https://i.imgur.com/viauFtZ.png';
const FavoriteMovies = 'https://i.imgur.com/F71apbo.png';
const AuthFBDemo = 'https://i.imgur.com/eADvtZa.png'
const MyShop = 'https://i.imgur.com/F19OvFh.png';
const ReduxShopDemo = 'https://i.imgur.com/Vj1w2zj.png';
const Name = 'https://i.imgur.com/OhKcH8f.png';
const ProjectPlanner = 'https://i.imgur.com/iM598Nz.png';
const UnconventionalCalculator = 'https://i.imgur.com/m97XMVD.png';
const Seher = 'https://i.imgur.com/FT3Gf6s.png';
const SeherShop = 'https://i.imgur.com/lNKiR5t.png';
const YourExpense = 'https://i.imgur.com/I5S0Kvr.png';
const MonterKiller = 'https://i.imgur.com/i8IbuYC.png';
const RPS = 'https://i.imgur.com/r6TlssV.png';
const dino = 'https://i.imgur.com/91OHEL0.png';

const DifferentDinosaurs = 'https://i.imgur.com/1iT3sxh.png';
const UFOhunter = 'https://i.imgur.com/CBbMzuu.png';
const MemoryGame = 'https://i.imgur.com/RFEjQ4e.png';
const SpaceImadrsGame = 'https://i.imgur.com/vPqHAAu.png';
const FroggerGame = 'https://i.imgur.com/QZuqGy1.png';
const WhackAMoleGame = 'https://i.imgur.com/cEaDMSO.png';
const SnakeGame = 'https://i.imgur.com/hsklzu2.png';
const ConnectFourGame = 'https://i.imgur.com/U9KhBDk.png';
const CupAnimation = 'https://i.imgur.com/h4vjYsd.png';
const vacationTime = 'https://i.imgur.com/uN4BcVg.png';
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

export default function GameCards() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  /* ------ AllProjects ------ */
  const AllProjects = [
    {
      image: `${Seher}`,
      title: "Seher's, Portfolio",
      MadeBy: 'Seher Mahmud',
      href: 'https://seher-development.vercel.app',
    },
    {
      image: `${vacationTime}`,
      title: 'Vacation Time',
      MadeBy: 'Safin Mahmud',
      href: 'https://vacationtime-safin.netlify.app/',
    },
    {
      image: `${BeachResort}`,
      title: 'BeachResort',
      MadeBy: 'Seher Mahmud',
      href: 'https://react-beach-resort-recording-seher.netlify.app',
    },
    {
      image: `${SeherShop}`,
      title: 'Seher shop',
      MadeBy: 'Seher Mahmud',
      href: 'https://seher-shopping.herokuapp.com/',
    },
    {
      image: `${PhoneStore}`,
      title: 'PhoneStore',
      MadeBy: 'Seher Mahmud',
      href: 'http://react-phone-store-recording-seher.netlify.app/',
    },
    {
      image: `${MOMessage}`,
      title: 'MOMessage',
      MadeBy: 'Seher Mahmud',
      href: 'https://momessage.netlify.app',
    },
    {
      image: `${ExcerTracker}`,
      title: 'Excerise Tracker',
      MadeBy: 'Seher Mahmud',
      href: 'https://etracker.netlify.app',
    },
    {
      image: `${UFOhunter}`,
      title: 'UFO Hunter',
      MadeBy: 'Safin Mahmud',
      href: 'https://ufo-hunter.netlify.app/',
    },
    {
      image: `${YourExpense}`,
      title: 'Your Expense App (demo)',
      MadeBy: 'Seher Mahmud',
      href: 'https://yourexpenseapp.netlify.app',
    },
    {
      image: `${fooder}`,
      title: 'fooderOrder, DemoApp',
      MadeBy: 'Seher Mahmud',
      href: 'https://fooderorder.netlify.app',
    },
    {
      image: `${AuthFBDemo}`,
      title: 'Auth Firebase Demo',
      MadeBy: 'Seher Mahmud',
      href: 'https://authfbdemo.netlify.app',
    },
    {
      image: `${MonterKiller}`,
      title: 'MonterKiller',
      MadeBy: 'Seher Mahmud',
      href: 'https://monster-killer-seher-demo-game.netlify.app',
    },
    {
      image: `${RPS}`,
      title: 'Rock Paper Sissors',
      MadeBy: 'Seher Mahmud',
      href: 'https://rock-paper-scissors-seher-demo-game.netlify.app',
    },
    {
      image: `${Tetris}`,
      title: 'Tetris Game',
      MadeBy: 'Safin Mahmud',
      href: 'https://tetris-game-safin.netlify.app/',
    },
    {
      image: `${MyMovieList}`,
      title: 'MyMovieList',
      MadeBy: 'Seher Mahmud',
      href: 'https://my-movie-list-seher-demo.netlify.app',
    },
    {
      image: `${FavoriteMovies}`,
      title: 'FavoriteMovies',
      MadeBy: 'Seher Mahmud',
      href: 'https://personal-movie-database-seher-demo.netlify.app',
    },
    {
      image: `${MyShop}`,
      title: 'MyShop',
      MadeBy: 'Seher Mahmud',
      href: 'https://mini-admin-shop-seher-demo.web.app',
    },
    {
      image: `${dino}`,
      title: 'Dino',
      MadeBy: 'Seher Mahmud',
      href: 'https://seher-dino.netlify.app',
    },
    {
      image: `${ReduxShopDemo}`,
      title: 'ReduxShopDemo',
      MadeBy: 'Seher Mahmud',
      href: 'https://reduxshopdemo.netlify.app',
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
      image: `${UnconventionalCalculator}`,
      title: 'UnconventionalCalculator',
      MadeBy: 'Seher Mahmud',
      href: 'https://unconventional-calculator-seher-demo.netlify.app',
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
    {
      image: `${CupAnimation}`,
      title: 'Cup, animation',
      MadeBy: 'Safin Mahmud',
      href: 'https://cup-animation.netlify.app/',
    },
    {
      image: `${ProjectPlanner}`,
      title: 'ProjectPlanner',
      MadeBy: 'Seher Mahmud',
      href: 'https://project-planner-seher-demo.web.app',
    },
    {
      image: `${Name}`,
      title: 'EnterName, Activity',
      MadeBy: 'Seher Mahmud',
      href: 'https://form-name-seher-demo.netlify.app',
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
        This are all our finish, demo, mini, advanced projects.
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
              {AllProjects}
            </div>
          </Grid>
        </Grid>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {AllProjects}
        </div>
      )}
    </div>
  );
}
