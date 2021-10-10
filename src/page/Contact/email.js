import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

export default function Email() {
  return (
    <div>
      <Grid
        item
        container
        style={{ marginBottom: '2em' }}
        justifyContent="center"
      >
        <Grid item>
          <EmailIcon
            style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            style={{
              fontSize: '1rem',
              color: '#f06292',
            }}
          >
            <a
              href="mailto:seher.omg@gmail.com"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Mail sisVSsis
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{ marginBottom: '2em' }}
        justifyContent="center"
      >
        <Grid item>
          <EmailIcon
            style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            style={{
              fontSize: '1rem',
              color: '#9575cd',
            }}
          >
            <a
              href="mailto:safin.omg@gmail.com"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Mail Safin
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{ marginBottom: '2em' }}
        justifyContent="center"
      >
        <Grid item>
          <EmailIcon
            style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            style={{
              fontSize: '1rem',
              color: '#64b5f6',
            }}
          >
            <a
              href="mailto:seher.mahmud@gmail.com"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Mail Seher
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
