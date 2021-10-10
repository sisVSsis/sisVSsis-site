import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../../actions/chat';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ name: '', chat: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((chat) => chat._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ name: '', chat: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to chat with the community.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{'Start texting'}</Typography>
        <TextField name="chat" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.chat} onChange={(e) => setPostData({ ...postData, chat: e.target.value })} />
        <Grid container direction="row">
        <Grid
          item
          container
          direction="column"
          sm
          style={{ marginRight: '1em', marginLeft: '1em' }}
        >
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>send</Button>
        </Grid>
        <Grid
          item
          container
          direction="column"
          sm
          style={{ marginRight: '1em', marginLeft: '1em' }}
        >
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </Grid>
      </Grid>
      </form>
    </Paper>
  );
};

export default Form;