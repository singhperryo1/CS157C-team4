import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import logo from "../pictures/logo.png";
import { makeStyles } from '@material-ui/core/styles';
import myu from "../services/myu.service.js";

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
  const [url, setUrl] = useState("");
  const [decodedUrls, setDecodedUrsl] = useState(0);
  const [hitRates, setHitRates] = useState(0);

  const handleUserLinkChange = (event) => {
    setUserLink(event.target.value);
  }; 

  const handleForm =  (e) => {
    e.preventDefault();

    if (!userLink) {
      alert("Please Enter a Valid Link"); 
    } else {

    // Get the ana

        myu.getHAInfo(userLink)
    .then(response => {
      setHitRates(response["data"]["rates"]);
      console.log(response);
      setUrl(response["data"]["url"]);
      }); 

    save();
  }

  // send the password by making post request

  }

  const increment = () => {
    setHitRates(hitRates + 1); 
    setDecodedUrsl(decodedUrls + 1); 
  }

  const saveUrl = () => {

    var urlo = {
      "url": url,
      "encoded": userLink,
      "rates": hitRates + 1,

    }

    myu.createUrl(urlo)
    .then(r => {
      console.log(r);
    })
  }

  const save = () => {

increment();

    var ha = {
      "rates": hitRates,
      "decodes": decodedUrls,
    }

    myu.createHA(ha)
    .then(re => {
      console.log("In increment");
    })

    saveUrl();

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