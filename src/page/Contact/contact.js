import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Posts from './Posts';
import { useDispatch } from 'react-redux';
import Form from './Form/Form';
import { getPosts } from '../../actions/chat';
import Email from './email';

export default function Contact() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div style={{ marginTop: '3em' }}>
      <Grid container direction="row" alignItems="center">
        <Grid
          item
          container
          direction="column"
          sm
          style={{ marginRight: '1em', marginLeft: '1em' }}
        >
        </Grid>
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
              width: '45em',
              height: '40em',
              overflowY: 'scroll',
            }}
          >
            <Posts setCurrentId={setCurrentId} />
          </div>
        </Grid>
        <Grid
          item
          container
          direction="column"
          sm
          style={{ marginRight: '1em', marginLeft: '1em'  }}
        >
          <Email />
          <div
            style={{ border: '2px solid pink', width: '45em', height: '22em' }}
          >
            <div style={{ margin: '1em' }}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
