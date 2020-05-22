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
    <div style={{ padding: 25 }}>
      <Divider variant="middle" padding={5} />
    </div>
  )
}

// --- Page Component ---

function JSPage() {
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
                  <Route path="/jspage/session2">
                    <PaperTitle text="Session2" />
                  </Route>
                  <Route path="/jspage/session3">
                    <PaperTitle text="Session3" />
                  </Route>
                  <Route path="/jspage/session4">
                    <PaperTitle text="Session4" />
                  </Route>
                  <Route path="/jspage/session5">
                    <PaperTitle text="Session5" />
                  </Route>
                  <Route path="/jspage">
                    <PaperTitle text="Session1" />
                  </Route>
                </Switch>
                <ButtonGroup orientation="vertical" color="primary" style={{ padding: theme.spacing(1) }} >
                  <Button component={Link} to="/jspage"> Session 1 </Button>
                  <Button component={Link} to="/jspage/session2"> Session 2 </Button>
                  <Button component={Link} to="/jspage/session3"> Session 3 </Button>
                  <Button component={Link} to="/jspage/session4"> Session 4 </Button>
                  <Button component={Link} to="/jspage/session5"> Session 5 </Button>
                </ButtonGroup>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper elevation={12} className={classes.paper}>
                <Switch>
                  <Route path="/jspage/session2">
                    <PaperTitle text="Session2 Summary" />

                    <SummaryText
                      text="Session 2 of Intro to Programming using Javascript went over Primitive Datatypes, and some of the different math functions that you can use in your program.
                    Primitive Datatypes are the types of data that can be stored and used in your program, for example, a number would be considered an integer. There are many different datatypes, used to make sure all forms of data can be used in our websites.
                    Datatypes include numbers, letters, bits, bytes, and many more. With datatypes such as integers, which hold number values you can also apply function to them to change them." />

                  </Route>
                  <Route path="/jspage/session3">
                    <PaperTitle text="Session3 Summary" />

                    <SummaryText
                      text="Session 3 of Intro to Programming using Javascript went over the different types of conditional statements offered in javascript. Comparison operators check the differences between two things, and can return a true or false statement if
                    a condition is met. Decision statements can do different tasks based on the outcome of a comparison operator, for example we have if then statements. A loop is used to run code repeatedly. This can either be a set number, or an
                    unset number depending on the type of loop you choose to use. " />

                  </Route>
                  <Route path="/jspage/session4">
                    <PaperTitle text="Session4 Summary" />

                    <SummaryText
                      text="Session 4 of Intro to Programming using Javascript went over the DOM. DOM stands for Document Object Model, and is incharge of everything that you see on the website.
                    The DO (Document Object) are all of your elements on the page, and working with the DOM is how you can make your websites reactive. Using javascript you can interface with the DOM to make changes during runtime.
                    Working with the DOM however you need to be careful not to make your website disproportional, or you can quickly mess with the positioning of elements." />

                  </Route>
                  <Route path="/jspage/session5">
                    <PaperTitle text="Session5 Summary" />

                    <SummaryText
                      text="Session 5 of Intro to Programming using Javascript went over how to connect javascript to forms, collecting and manipulating data from them. Forms submit information to another webpage, or section of the website, and can be interpreted through javascript.
                    Javascript can be used to validate forms, change data, run operators or conditional statements on all of the data taken from the forms. Without javascript and forms, many pages wouldn’t be able to be as unique and reactive as they are. " />

                  </Route>
                  <Route path="/jspage">
                    <PaperTitle text="Session1 Summary" />

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
                  <Route path="/jspage/session2">
                    <PaperTitle text="Session2 Vocab" />

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
                  <Route path="/jspage/session3">
                    <PaperTitle text="Session3 Vocab" />

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
                            <TableCell> Comparison Operator </TableCell>
                            <TableCell> Compairs the properties of two or more objects </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Decision Statement </TableCell>
                            <TableCell> Can produce decisions based on the outcome of a comparison Operator </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Loops </TableCell>
                            <TableCell> Runs a certain section of code a set or unset number of times </TableCell>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </Route>
                  <Route path="/jspage/session4">
                    <PaperTitle text="Session4 Vocab" />

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
                            <TableCell> DOM </TableCell>
                            <TableCell> Defines the layout and stucture of a website </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> Events </TableCell>
                            <TableCell> A action that occurs during runtime </TableCell>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </Route>
                  <Route path="/jspage/session5">
                    <PaperTitle text="Session5 Vocab" />

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
                            <TableCell> Validation </TableCell>
                            <TableCell> Check that something is correct </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> GET </TableCell>
                            <TableCell> Allows you to connect without redirection </TableCell>
                          </TableBody>
                          <TableBody>
                            <TableCell> POST </TableCell>
                            <TableCell> Allows you to connect only when directed </TableCell>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </Route>
                  <Route path="/jspage">
                    <PaperTitle text="Session1 Vocab" />

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

          <Grid container direction="row" justify="center" alignItems="center" className={classes.grid} spacing={8}>
            <Switch>
              <Route path="/jspage/session2">
                <SessionButton href="https://drive.google.com/file/d/1f6_9-CRYM4epXAOXlXtQDWcNuHkup9Da/view?usp=sharing" text="Pre-Assesement" />
                <SessionButton href="https://drive.google.com/file/d/1H0sn5Agjj58TeM51PlUCcfVCl1xHE1JM/view?usp=sharing" text="Training" />
                <SessionButton href="https://drive.google.com/file/d/1oeeMWkittQsAtVHuZVkPSUtK9iQWtbYM/view?usp=sharing" text="Lab" />
                <SessionButton href="https://drive.google.com/file/d/1yekKeFyWzgoVGvQdlTKTXWJ0wnU7gx0I/view?usp=sharing" text="Post-Assesement" />
              </Route>
              <Route path="/jspage/session3">
                <SessionButton href="https://drive.google.com/file/d/12bRj228FZUiD6akslL2KwEJb-byo5Vtn/view?usp=sharing" text="Pre-Assesement" />
                <SessionButton href="https://drive.google.com/file/d/17PwofWLI9NRXX6jcyFzEEZMLRFb4WKn9/view?usp=sharing" text="Training" />
                <SessionButton href="https://drive.google.com/file/d/1bgEdVGqpB0y1PTtZqK8A3JunvG4c8lxn/view?usp=sharing" text="Lab" />
                <SessionButton href="https://drive.google.com/file/d/1jIuA0UTUZeeKJkik5ky6KQ9WoZe0LiCM/view?usp=sharing" text="Post-Assesement" />
              </Route>
              <Route path="/jspage/session4">
                <SessionButton href="https://drive.google.com/file/d/154M5Gg0ze_Sb0jQ0TaheM5-QbumbS8a6/view?usp=sharing" text="Pre-Assesement" />
                <SessionButton href="https://drive.google.com/file/d/17kiUOysTqcPScRUCutaRwzhwSYu9Q-IA/view?usp=sharing" text="Training" />
                <SessionButton href="https://drive.google.com/file/d/1JX2tIW252ZSRiuztC7U1PmnpNQsAwv-N/view?usp=sharing" text="Lab" />
                <SessionButton href="https://drive.google.com/file/d/18vM3USAAoCd9lbwQtenrThWQjx2SINRE/view?usp=sharing" text="Post-Assesement" />
              </Route>
              <Route path="/jspage/session5">
                <SessionButton href="https://drive.google.com/file/d/1TVctX3qbodG55Kh23q6gX5ATdFqTOIfn/view?usp=sharing" text="Pre-Assesement" />
                <SessionButton href="https://drive.google.com/file/d/1eFrpo3gLB_XHkdUyec178hW9lq-4Kz6u/view?usp=sharing" text="Training" />
                <SessionButton href="https://drive.google.com/file/d/1-X8axnNXTDlftlJ80O74H7Ns8X4ArFIz/view?usp=sharing" text="Lab" />
                <SessionButton href="https://drive.google.com/file/d/1nSH64T546Fsppw1YIaGoxVqE9tYxhXu4/view?usp=sharing" text="Post-Assesement" />
              </Route>
              <Route path="/jspage">
                <SessionButton href="https://drive.google.com/file/d/1v2im0Qn4dCPELCukFhf9sRm-xKrbJwvZ/view?usp=sharing" text="Pre-Assesement" />
                <SessionButton href="https://drive.google.com/file/d/1xC8CF-hbWUmkQhof10j3ry6VWrmKjT2T/view?usp=sharing" text="Training" />
                <SessionButton href="https://drive.google.com/file/d/1oJ6nceu9_HEwqRMBwXLFOqYq885MQEkZ/view?usp=sharing" text="Lab" />
                <SessionButton href="https://drive.google.com/file/d/1VeEHlSONyd4jIOIcH7WGi-Oqtc8uktuq/view?usp=sharing" text="Post-Assesement" />
              </Route>
            </Switch>
          </Grid>
        </Router>
      </ThemeProvider>
    </div>
  );
}

// --- Exporting Page ---

export default JSPage;
