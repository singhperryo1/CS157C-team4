import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import logo from "../pictures/logo.png";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  h3: {
  	color: "blue",
  }
}));

export default function Home() {
const classes = useStyles();


  const [userLink, setUserLink] = useState("");
  const [decodedUrls, setDecodedUrsl] = useState("0");
  const [hitRates, setHitRates] = useState("0");

  const handleUserLinkChange = (event) => {
    setUserLink(event.target.value);
  }; 

  const handleForm =  (e) => {
    e.preventDefault();

    if (!userLink) {
      alert("Please Input Your Link"); 
    } else {
    console.log("This is userLink: " + userLink);

    setUserLink("");
  }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
        <img src = 
        	{logo}/>
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="text"
                id="userlink"
                label="Enter Link To Decode"
                name="userlink"
                value = {userLink}
                onChange = {handleUserLinkChange}
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleForm}
          >
            Decode Link
          </Button>
          <Grid container>
            <Grid item>
             <h3 className={classes.h3}>
                Total Number of Decoded Urls: {decodedUrls}
              </h3>
            </Grid>
            <Grid>
             <h3 className={classes.h3}>
                Total Number of Hit Rates: {hitRates}
              </h3>
            </Grid>
          </Grid>
        </form>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>

    </Container>

  );
}