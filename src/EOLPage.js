import React from 'react';
import { Button, ButtonGroup, makeStyles, createMuiTheme, ThemeProvider, Paper, Divider, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Rows are NOT Centered
// Theme is defined and passed wrong
// Bold table heading
// Tables take up WAY to much space in code
// Clean up JSS Styling
// Elements need to be resized
// Implement JSON Support for multiple courses
// Redo grid breakpoints

// --- Theming ---

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

  grid: {
    width: "100%",
    margin: 0
  },

  mainText: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  sectionSelect: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "left",
  },

  paper: {
    textAlign: "center",
  },

  boxPadding: {
    padding: theme.spacing(2),
  },

});

// --- Components needed for the Page ---

function TitleText(props) {
  return (
    <Typography align="center" color="textPrimary" variant="h2" component="h2" >
      {props.text}
    </Typography>
  )
}

function PaperTitle(props) {
  return (
    <Typography align="center" color="textPrimary" variant="h3" component="h2" style={{ paddingTop: 16 }}>
      {props.text}
    </Typography>
  )
}

function SummaryText(props) {
  return (
    <Typography variant="body1" style={{ padding: 16, fontSize: 14 }} >
      {props.text}
    </Typography>
  )
}

function SessionButton(props) {
  return (
    <Grid item xs={2}>
      <Button href={props.href} target="_blank" color="primary" variant="contained" size="large" style={{ minWidth: 200 }}>
        {props.text}
      </Button>
    </Grid>
  )
}

function PaddedDivider() {
  return (
    <div style={{ padding: 15 }}>
      <Divider variant="middle" padding={5} />
    </div>
  )
}

// --- Page Component ---

function EOLPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Router>
          <div id="Text_Container">
            <TitleText text="Robert Walling" />
            <TitleText text="Class of 2021" />
            <TitleText text="Evidence of Learning" />
            <TitleText text="Intro to Programming Using Javascript" />
          </div>

          <PaddedDivider />

          <Grid container direction="row" justify="center" alignItems="stretch" className={classes.grid} spacing={8}>

            <Grid item xs={3}>
              <Paper elevation={12} className={classes.paper}>
                <Switch>
                  <Route path="/eolpage/week2">
                    <PaperTitle text="Week Two" />
                  </Route>
                  <Route path="/eolpage">
                    <PaperTitle text="Week One" />
                  </Route>
                </Switch>
                <ButtonGroup orientation="vertical" color="primary" style={{ padding: theme.spacing(1) }} >
                  <Button component={Link} to="/eolpage"> Week of 5/4 - 5/8 </Button>
                  <Button component={Link} to="/eolpage/week2"> Week of 5/18 - 5/22 </Button>
                </ButtonGroup>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper elevation={12} className={classes.paper}>
                <Switch>
                  <Route path="/eolpage/week2">
                    <PaperTitle text="Week Two Summary" />

                    <SummaryText
                      text="Session 2 of Intro to Programming using Javascript went over Primitive Datatypes, and some of the different math functions that you can use in your program.
                    Primitive Datatypes are the types of data that can be stored and used in your program, for example, a number would be considered an integer. There are many different datatypes, used to make sure all forms of data can be used in our websites.
                    Datatypes include numbers, letters, bits, bytes, and many more. With datatypes such as integers, which hold number values you can also apply function to them to change them." />

                  </Route>

                  <Route path="/eolpage">
                    <PaperTitle text="Week One Summary" />

                    <SummaryText
                      text="Session 1 of Intro to Programming using Javascript went over the basics of the javascript language, and how to apply it to your HTML applications. Javascript can be used to make your websites reactive and dynamic.
                    In javascript you can have your website execute custom code, making them different for every user, or to make your website more visually complex.
                    Javascript can be done inline or in an external sheet. Javascript powers many of the webs most important website, and can be used as a frontend tool, and as a backend." />

                  </Route>
                </Switch>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper elevation={12} className={classes.paper}>
                <Switch>
                  <Route path="/eolpage/week2">
                    <PaperTitle text="Week Two Vocab" />

                    <div className={classes.boxPadding}>
                      <TableContainer component={Paper} style={{ backgroundColor: '#696969' }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell> Term </TableCell>
                              <TableCell> Defintion </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableCell> Primitive Datatype </TableCell>
                            <TableCell> Simple datatypes used in programming languages to proform operations </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Properties </TableCell>
                            <TableCell> The characteristics of a function or object. </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Array </TableCell>
                            <TableCell> Holds multiple variables in one object.  </TableCell>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </Route>

                  <Route path="/eolpage">
                    <PaperTitle text="Week One Vocab" />

                    <div className={classes.boxPadding}>
                      <TableContainer component={Paper} style={{ backgroundColor: '#696969' }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell> Term </TableCell>
                              <TableCell> Defintion </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableCell> Operator </TableCell>
                            <TableCell> Can be used to apply arithmitic operations on numbers </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Variable </TableCell>
                            <TableCell> Used to hold a data type that can be changed </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Constant </TableCell>
                            <TableCell> Used to hold a data type that cannot be changed </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Exeption </TableCell>
                            <TableCell> An event during runtime that causes an error, or problem </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Runtime </TableCell>
                            <TableCell> The time during which your code is running </TableCell>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </Route>
                </Switch>
              </Paper>
            </Grid>

          </Grid>

          <Grid container direction="row" justify="center" alignItems="stretch" className={classes.grid} spacing={8}>
            <SessionButton href="https://github.com/RWalling21/EOL_Website" text="Github Link" />
            <SessionButton href="https://drive.google.com/file/d/1XEuYY9W91Dc5VsVaOgod6iPcooS0A31Y/view?usp=sharing" text="Video Drive" />
          </Grid>

        </Router>
      </ThemeProvider>
    </div>
  );
}

// --- Exporting Page ---

export default EOLPage;
