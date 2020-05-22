import React from 'react';
import { Button, ButtonGroup, makeStyles, createMuiTheme, ThemeProvider, Paper, Divider, Typography, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// CLEAN CLEAN CLEAN!!!
// Components and theme needs to be moved somewhere else or cleaned up

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#BB8cfc",
    },
    secondary: {
      main: "#03dac6",
      contrastText: "#fff",
    },
  },
});

// --- JSS Style Sheet ---

const useStyles = makeStyles({
  root: {
    height: "100vh",
    background: theme.palette.background.default,
    margin: "auto",
    overflowX: 'hidden'
  },

  paper: {
    textAlign: "center",
  },

  selectBox: {
    padding: theme.spacing(2),
  },

});

function TitleText(props) {
  return (
    <Typography align="center" color="textPrimary" variant="h2" component="h2" style={{ padding: theme.spacing(1) }} >
      {props.text}
    </Typography>
  )
}

function PaddedDivider() {
  return (
    <div style={{ padding: 25 }}>
      <Divider variant="middle" padding={5} />
    </div>
  )
}

function PaperTitle(props) {
  return (
    <Typography align="center" color="textPrimary" variant="h3" component="h2" style={{ paddingTop: 16 }}>
      {props.text}
    </Typography>
  )
}

function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Router>

          <div id="Text_Container">
            <TitleText text="Robert Walling" />
            <TitleText text="Class of 2021" />
            <TitleText text="Evidence of Learning" />
          </div>

          <PaddedDivider />

          <Grid container justify="center">
            <Grid item xs={2}>
              <Paper elevation={12} className={classes.paper}>
                <PaperTitle text="Select Course" />
                <ButtonGroup orientation="vertical" color="primary" className={classes.selectBox} >
                  <Button component={Link} to="/jspage" target="_blank" > JavaScript </Button>
                  <Button component={Link} to="/eolpage" target="_blank"> EOL Website </Button>
                </ButtonGroup>
              </Paper>
            </Grid>
          </Grid>

        </Router>
      </ThemeProvider>
    </div>
  );
}

export default MainPage;