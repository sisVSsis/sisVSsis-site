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
const ProjectPlanner = 'https://i.imgur.com/iM598Nz.png';
const UnconventionalCalculator = 'https://i.imgur.com/m97XMVD.png';
const Seher = 'https://i.imgur.com/FT3Gf6s.png';
const SeherShop = 'https://i.imgur.com/lNKiR5t.png';
const YourExpense = 'https://i.imgur.com/I5S0Kvr.png';

const vacationTime = 'https://i.imgur.com/uN4BcVg.png';

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

  /* ------ AllWebsite ------ */
  const AllWebsite = [
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
      image: `${UnconventionalCalculator}`,
      title: 'UnconventionalCalculator',
      MadeBy: 'Seher Mahmud',
      href: 'https://unconventional-calculator-seher-demo.netlify.app',
    },
    {
      image: `${ReduxShopDemo}`,
      title: 'ReduxShopDemo',
      MadeBy: 'Seher Mahmud',
      href: 'https://reduxshopdemo.netlify.app',
    },
    {
      image: `${ProjectPlanner}`,
      title: 'ProjectPlanner',
      MadeBy: 'Seher Mahmud',
      href: 'https://project-planner-seher-demo.web.app',
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
        Enjoy our Websites
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
              {AllWebsite}
            </div>
          </Grid>
        </Grid>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {AllWebsite}
        </div>
      )}
    </div>
  );
}
