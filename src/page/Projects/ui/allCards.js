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

import BeachResort from './image/Seher/website/BeachResort.png';
import PhoneStore from './image/Seher/website/PhoneStore.png';
import MOMessage from './image/Seher/website/message.png';
import ExcerTracker from './image/Seher/website/excertracker.png';
import fooder from './image/Seher/website/fooder.png';
import MyMovieList from './image/Seher/website/MyMovieList.png';
import FavoriteMovies from './image/Seher/website/FavoriteMovies.png';
import AuthFBDemo from './image/Seher/website/AuthFBDemo.png'
import MyShop from './image/Seher/website/MyShop.png';
import ReduxShopDemo from './image/Seher/website/ReduxShopDemo.png';
import Name from './image/Seher/website/Name.png';
import ProjectPlanner from './image/Seher/website/ProjectPlanner.png';
import UnconventionalCalculator from './image/Seher/website/UnconventionalCalculator.png';
import Seher from './image/Seher/website/Seher.png';
import SeherShop from './image/Seher/website/seher-shop.png';
import MonterKiller from './image/Seher/games/MonterKiller.png';
import RPS from './image/Seher/games/RPS.png';
import YourExpense from './image/Seher/website/YourExpense.png';
import dino from './image/Seher/games/dino.png';

import DifferentDinosaurs from './image/Safin/website/DifferentDinosaurs.png';
import UFOhunter from './image/Safin/games/UFOhunter.png';
import MemoryGame from './image/Safin/games/MemoryGame.png';
import SpaceImadrsGame from './image/Safin/games/SpaceImadrsGame.png';
import FroggerGame from './image/Safin/games/FroggerGame.png';
import WhackAMoleGame from './image/Safin/games/WhackAMoleGame.png';
import SnakeGame from './image/Safin/games/SnakeGame.png';
import ConnectFourGame from './image/Safin/games/ConnectFourGame.png';
import CupAnimation from './image/Safin/games/CupAnimation.png';
import vacationTime from './image/Safin/website/vacationTime.png';

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
