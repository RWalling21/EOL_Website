import React from 'react';
import { Button, ButtonGroup, makeStyles, createMuiTheme, ThemeProvider, Paper, Divider, Typography, Card, CardContent, CardActions } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//TODO: Add in custom color pallet
// Create Classes for redundent styles
// MAJOR code cleanup and refactor
// Animation on session change
// Update theme and understand more of what we can do with it (color)
// Give Cards same Base Height as Session selector
// Make our large, ugly section into custom functions
// Butttons look a little off, think of something to do with them
// Find a way to make a main page with all of my courses attatched
// Add some form of Icon to buttons
// Add State to switch between light / dark theme

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#BB8cfc',
    },
    secondary: {
      main: '#03dac6',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: theme.palette.background.default,
    margin: "auto"
  },

  mainText: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionSelect: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'left',
  },

  paper: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },

  selectBox: {
    textAlign: 'center',
    padding: theme.spacing(2),
    minWidth: 225,
  },

  card: {
    minWidth: 300,
  },
});

export default function App() {
  const style = useStyles()

  return (
    <div className={style.root}>
      <ThemeProvider theme={theme}>
        <Router>

          <div id="Text_Container">
            <Typography align="center" color="textPrimary" variant="h2" component="h2" >
              Robert Walling
        </Typography>
            <Typography align="center" color="textPrimary" variant="h2" component="h2" >
              Class of 2021
        </Typography>
            <Typography align="center" color="textPrimary" variant="h2" component="h2" >
              Evidence of Learning
        </Typography>
            <Typography align="center" color="textPrimary" variant="h2" component="h2" >
              Intro to Programming using Javascript
        </Typography>
          </div>

          <div style={{ padding: 25 }}>
            <Divider variant="middle" padding={5} />
          </div>

          <div id="Row_1" className="flex_wrapper">

            <div className="select_box">
              <Paper elevation={12} className={style.paper}>
                <Switch>
                  <Route path="/Session1">
                    <Typography align="center" color="textPrimary" variant="h3" component="h2">Session1</Typography>
                  </Route>
                  <Route path="/Session2">
                    <Typography align="center" color="textPrimary" variant="h3" component="h2">Session2</Typography>
                  </Route>
                  <Route path="/Session3">
                    <Typography align="center" color="textPrimary" variant="h3" component="h2">Session3</Typography>
                  </Route>
                  <Route path="/Session4">
                    <Typography align="center" color="textPrimary" variant="h3" component="h2">Session4</Typography>
                  </Route>
                  <Route path="/Session5">
                    <Typography align="center" color="textPrimary" variant="h3" component="h2">Session5</Typography>
                  </Route>
                  <Route path="/">
                    <Typography align="center" color="textPrimary" variant="h3" component="h2">Sessions</Typography>
                  </Route>
                </Switch>
                <ButtonGroup orientation="vertical" color="primary" className={style.selectBox}>
                  <Button component={Link} to="/Session1">Session 1</Button>
                  <Button component={Link} to="/Session2">Session 2</Button>
                  <Button component={Link} to="/Session3">Session 3</Button>
                  <Button component={Link} to="/Session4">Session 4</Button>
                  <Button component={Link} to="/Session5">Session 5</Button>
                </ButtonGroup>
              </Paper>
            </div>

            <Card elevation={12} className={style.card}>
              <CardContent>
                <Typography variant="h3" style={{ marginBottom: 15, }}> Summary </Typography>
              </CardContent>
              <CardActions>
                <Switch>
                  <Route path="/session1">
                    <Button href="https://docs.google.com/document/d/1EvXGBcmERoa44nSFmdwLIyMJCIbD8VNsds4D12kyuw4/edit?usp=sharing" target="_blank" color="primary"> Section1 Summary </Button>
                  </Route>
                  <Route path="/session2">
                    <Button href="https://docs.google.com/document/d/1htkiXHWZ-rC5Zf0Zx0s1pnjrA1Dc4rzIiTjNTkZdxE0/edit?usp=sharing" target="_blank" color="primary"> Section2 Summary </Button>
                  </Route>
                  <Route path="/session3">
                    <Button href="https://docs.google.com/document/d/1oZf4tpd4LLAMSJHC6_CbOiwa1aVpfEe01xwKsSBIuKg/edit?usp=sharing" target="_blank" color="primary"> Section3 Summary </Button>
                  </Route>
                  <Route path="/session4">
                    <Button href="https://docs.google.com/document/d/1EqDTCHFx55xOoF3sAkHXlDPJdbRS7L_APo9YnnB7cIE/edit?usp=sharing" target="_blank" color="primary"> Section4 Summary </Button>
                  </Route>
                  <Route path="/session5">
                    <Button href="https://docs.google.com/document/d/1y-GiuJeZZ3HCSKdDu4LJBJJ28782_UeTzin0QPsCYvI/edit?usp=sharing" target="_blank" color="primary"> Section5 Summary </Button>
                  </Route>
                </Switch>
              </CardActions>
            </Card>

            <Card elevation={12} className={style.card}>
              <CardContent>
                <Typography variant="h3" className={style.cardText}> Vocab </Typography>
              </CardContent>
              <CardActions>
                <Switch>
                  <Route path="/session1">
                    <Button href="https://docs.google.com/spreadsheets/d/1VIvEGa2FBpkT_0LYz2PtglXD_fIVBnSu95crdZnacG8/edit?usp=sharing" target="_blank" color="primary"> Section1 Vocab </Button>
                  </Route>
                  <Route path="/session2">
                    <Button href="https://docs.google.com/spreadsheets/d/1PQzxyN19Q1mJlbBP27tHQTLSgChLGUUm-qgERw7Fi_4/edit?usp=sharing" target="_blank" color="primary"> Section2 Vocab </Button>
                  </Route>
                  <Route path="/session3">
                    <Button href="https://docs.google.com/spreadsheets/d/1Q1yuDuoqRnNGDleGFe8BPg0FhUQQEL3Fv2bLz2KnBYE/edit?usp=sharing" target="_blank" color="primary"> Section3 Vocab </Button>
                  </Route>
                  <Route path="/session4">
                    <Button href="https://docs.google.com/spreadsheets/d/1ca9ezisMdVpf6u7y5eslZpSc8O4odhap7__jVF3_YDA/edit?usp=sharing" target="_blank" color="primary"> Section4 Vocab </Button>
                  </Route>
                  <Route path="/session5">
                    <Button href="https://docs.google.com/spreadsheets/d/1loRomtQTZGs0ivp1ggGNudLK-n4KYCOppBeTC59Rk4c/edit?usp=sharing" target="_blank" color="primary"> Section5 Vocab </Button>
                  </Route>
                </Switch>
              </CardActions>
            </Card>

          </div>

          <div style={{ padding: 50 }}></div>

          <div id="Row_2" className="flex_session">
            <Switch>
              <Route path="/Session1">
                <Button href="https://drive.google.com/file/d/1v2im0Qn4dCPELCukFhf9sRm-xKrbJwvZ/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Pre-Assesement </Button>
                <Button href="https://drive.google.com/file/d/1xC8CF-hbWUmkQhof10j3ry6VWrmKjT2T/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Training </Button>
                <Button href="https://drive.google.com/file/d/1oJ6nceu9_HEwqRMBwXLFOqYq885MQEkZ/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Lab </Button>
                <Button href="https://drive.google.com/file/d/1VeEHlSONyd4jIOIcH7WGi-Oqtc8uktuq/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Post-Assesement </Button>
              </Route>
              <Route path="/Session2">
                <Button href="https://drive.google.com/file/d/1f6_9-CRYM4epXAOXlXtQDWcNuHkup9Da/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Pre-Assesement </Button>
                <Button href="https://drive.google.com/file/d/1H0sn5Agjj58TeM51PlUCcfVCl1xHE1JM/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Training </Button>
                <Button href="ttps://drive.google.com/file/d/1oeeMWkittQsAtVHuZVkPSUtK9iQWtbYM/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Lab </Button>
                <Button href="https://drive.google.com/file/d/1yekKeFyWzgoVGvQdlTKTXWJ0wnU7gx0I/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Post-Assesement </Button>
              </Route>
              <Route path="/Session3">
                <Button href="https://drive.google.com/file/d/12bRj228FZUiD6akslL2KwEJb-byo5Vtn/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Pre-Assesement </Button>
                <Button href="https://drive.google.com/file/d/17PwofWLI9NRXX6jcyFzEEZMLRFb4WKn9/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Training </Button>
                <Button href="https://drive.google.com/file/d/1bgEdVGqpB0y1PTtZqK8A3JunvG4c8lxn/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Lab </Button>
                <Button href="https://drive.google.com/file/d/1jIuA0UTUZeeKJkik5ky6KQ9WoZe0LiCM/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Post-Assesement </Button>
              </Route>
              <Route path="/Session4">
                <Button href="https://drive.google.com/file/d/154M5Gg0ze_Sb0jQ0TaheM5-QbumbS8a6/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Pre-Assesement </Button>
                <Button href="https://drive.google.com/file/d/17kiUOysTqcPScRUCutaRwzhwSYu9Q-IA/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Training </Button>
                <Button href="https://drive.google.com/file/d/1JX2tIW252ZSRiuztC7U1PmnpNQsAwv-N/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Lab </Button>
                <Button href="https://drive.google.com/file/d/18vM3USAAoCd9lbwQtenrThWQjx2SINRE/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Post-Assesement </Button>
              </Route>
              <Route path="/Session5">
                <Button href="https://drive.google.com/file/d/1TVctX3qbodG55Kh23q6gX5ATdFqTOIfn/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Pre-Assesement </Button>
                <Button href="https://drive.google.com/file/d/1eFrpo3gLB_XHkdUyec178hW9lq-4Kz6u/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Training </Button>
                <Button href="https://drive.google.com/file/d/1-X8axnNXTDlftlJ80O74H7Ns8X4ArFIz/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Lab </Button>
                <Button href="https://drive.google.com/file/d/1nSH64T546Fsppw1YIaGoxVqE9tYxhXu4/view?usp=sharing" target="_blank" color="primary" variant="contained" size="large"> Post-Assesement </Button>
              </Route>
            </Switch>
          </div>

        </Router>
      </ThemeProvider>
    </div>
  );
}
