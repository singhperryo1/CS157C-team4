import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import CreateAccount from "./components/CreateAccount.js";
import Dashboard from "./components/Dashboard.js";
import Grid from '@material-ui/core/Grid';
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js"; 
import Reset from "./components/Reset.js";
import React from 'react';
import background from "./pictures/background.webp"


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  
  const classes = useStyles();

  return (
    <div style = {{backgroundImage: `url(${background})`
    }}>
    <Router> 

    <div className={classes.root}>

    <Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>

      <Navbar />

    </Grid>

    </div>
      <Switch>

      <Route exact path="/">
          <Home />
        </Route>

      <Route exact path="/dashboard">
      <Dashboard />
      </Route>

        <Route exact path="/Login">
          <Login />
        </Route>

              <Route exact path="/Reset">
          <Reset />
        </Route>

        <Route exact path="/CreateAccount">
          <CreateAccount />
        </Route>

         {/* If user try to access a invalid page,
                    redirect user to Homepage.
                */}       <Redirect to="/"/>

      </Switch>

    </Router> 
    </div>
  );
}

export default App;
