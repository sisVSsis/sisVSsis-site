import { Grid } from '@material-ui/core';
import React from 'react';

export default function about() {
  return (
    <div style={{ marginTop: '3em' }}>
      <Grid container direction="row">
        <Grid
          item
          container
          direction="column"
          sm
          style={{ marginRight: '1em', marginLeft: '1em' }}
        >
          <div>hello</div>
        </Grid>
        <Grid
          item
          container
          direction="column"
          sm
          style={{ marginRight: '1em', marginLeft: '1em' }}
        >
          <div
            style={{ border: '5px solid pink', width: '45em', height: '40em' }}
          >
            hello
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
