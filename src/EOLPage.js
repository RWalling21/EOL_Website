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
// Table is created incorectly, make it table row not table body

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
            <TitleText text="Evidence of Learning Page Creation" />
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
                      text="For the second week of my Evidence of Learning website I focused on cleaning code, and getting it to as high of a quality as
                      possible. During the first week to reach a stable working build I needed to cut corners and use questionable coding practices, so
                      the first half of my week was spent correcting these issues and updating the website. Some of the changes I made were moving from
                      using CSS Flexbox, to the Material-UI Grid component and linking text and table directly into the website. After the cleanup was
                      finished I decided it was time to start to expand the website, and attempt to add in multiple pages showing what I have done over
                      our Distance Learning period. Because of time limits I was not able to complete this, I planned on passing a JSON file into the
                      website and having it generate a page but I was not able to finish this by the due date." />

                  </Route>

                  <Route path="/eolpage">
                    <PaperTitle text="Week One Summary" />

                    <SummaryText
                      text="The First Week of creating my new Evidence of Learning website revolved around learning the basics of React and creating the
                      first draft of my website. I was not able to create as much of the website as I would of liked to as I was struggling through
                      multiple learning curves. Though the first week was very frustrating it was the most important and beneficial.
                      There are many parts of it that can be done better and will be in the future but being able to have a stable working version of
                      the website is what is most important upfront." />

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
                              <TableCell> Component </TableCell>
                              <TableCell> A function that can be simplily replicated with predefined elements </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableCell> Functional Routing </TableCell>
                            <TableCell> A set path to route a website after an action is proformed </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Webpage Overflow </TableCell>
                            <TableCell> When the webpage become to large to be fully displayed on a monitor. </TableCell>
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
                            <TableCell> JSS </TableCell>
                            <TableCell> Inline javascript based style sheet </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> State </TableCell>
                            <TableCell> A true or false value tied to an external function </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Prop </TableCell>
                            <TableCell> A propertie assigned to an expernal component or funciton </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Routing </TableCell>
                            <TableCell> Changes what is displayed by the DOM based on website link </TableCell>
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
