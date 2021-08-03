import { Avatar } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import myu from "../services/myu.service.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
    table: {
    maxWidth: 370,
  },
    orange: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));




export default function Home(props) {


 let history = useHistory();
    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [org, setOrg] = useState("");
    const [url, setUrl] = useState("");
    const [display, setDisplay] = useState(false);
    const [decoded, setDecoded] = useState("");
    const [data, setData] = useState([]);


    const handleForm =  (e) => {

      console.log("Working");

       setTimeout(() => history.push("/"), 1000);

  }

  const getRows = () => {     

myu.findAllUrl()
    .then(response => {
      setData(response["data"]);
      console.log(data);
      }); 
}



function createData(r, u, e) {

  console.log(r);

  return {r , u, e };
}


const rows = data.length !== 0 ? data.map(row => createData(row["rates"], row["url"], row["encoded"])) : null;

  const handleEncode = (e) => {

    var value = ""; 

    if (url.match("sanjosestate")) {
       value = "www.sjsu.com"; 
    } else if (url.match("google")) {
       value = "www.gon.com"; 
    } else if (url.match("mike")) {
      value = "wwww.mwu.com"
    } else if (url.match("cs")) {
      value = "www.cs57.com"
    } else {
      value = "wwww.sA3p3.com"
    }
    setDecoded(value); 

    save(); 

    getRows();

  }

   const save = () => {

        var urlo = {
      "url": url,
      "encoded": decoded,
      "rates": 0,

    }

    myu.createUrl(urlo)
    .then(r => {
      console.log(r);
    });
  }


    const handleUrlChange = (event) => {

      setUrl(event.target.value);
  }; 


  return (
    <div className={classes.root} >
     <Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>    
    <Grid item  xs = {12} md = {9}> 
    <Avatar className={classes.orange}>D</Avatar>
    <div>
    <h2>Welcome to makeMyURL</h2>
     <br/>
     <br/>
     <h3>Username: demo</h3>
     <h3>Organization: finalDemo</h3>

        <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hit Rates</TableCell>
            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Encoded As</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { data.length !== 0 &&
          rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.r}
              </TableCell>
              <TableCell align="right">{row.u}</TableCell>
              <TableCell align="right">{row.e}</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
    <h2>Hit Rates Ranking Table</h2>
    </div>
    </Grid>
     <Grid item xs = {12} md = {3} spacing = {3} > 
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="text"
                id="userlink"
                label="Enter Link To Encode"
                name="userlink"
                value = {url}
                onChange = {handleUrlChange}
            />

            {
            decoded !== "" &&
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="encoded"
            label="Encoded Link"
            type="text"
            id="enxo"
            value = {decoded}
          />
          }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleEncode}
          >
            Encode Url
          </Button>
      
    </Grid> 

 <Grid item xs = {12} md = {3} spacing = {3} > 
               <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleForm}
          >
            Log Out
          </Button>
    </Grid>     
    </Grid>
        <br/>
        <br/>

        <br/>

        <br/>

        

    </div>
  );
}