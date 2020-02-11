import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './App.css';

class MyContainer extends Component {
    render() {
      return (
        <Container component="main" maxWidth="xs">
          <form className={useStyles.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                ></TextField>
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Address"
                  name="Address"
                  autoComplete="Address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={this.sendData}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={useStyles.submit}
                >
                  Send Data
                  </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={this.getData}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={useStyles.submit}
                > Get Data
                  </Button>
              </Grid>
              <Grid item xs={12}>
  
              </Grid>
            </Grid>
          </form>
          <form>
            <ul>
  
            </ul>
          </form>
        </Container>
      );
    }
  }
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(8),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  