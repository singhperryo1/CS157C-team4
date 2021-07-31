import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
import profile from "../pictures/mypic.jpeg";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
    table: {
    maxWidth: 370,
  },
}));



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Home() {

    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [org, setOrg] = useState("");
    const [url, setUrl] = useState("");


    const handleForm =  (e) => {

      console.log("Working");
  }


    const handleUrlChange = (event) => {
      setUrl(event.target.value);
  }; 


  return (
    <div className={classes.root} >
     <Grid container = "true" direction = "row" justify = "center" alignItems = "center" spacing = {3}>    
    <Grid item  xs = {12} md = {9}> 
    <Avatar alt="Remy Sharp" src={profile} className={classes.large} />
    <div>
    <h2>Welcome to makeMyURL</h2>
     <br/>
     <br/>
     <h3>Username: </h3>
     <h3>Organization: </h3>

        <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h2>Hit Rates Ranking Table</h2>
    </div>
    </Grid>
     <Grid item xs = {12} md = {3} spacing = {3} > 
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
                value = {url}
                onChange = {handleUrlChange}
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleForm}
          >
            Encode Url
          </Button>
        </form>
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

    </div>
  );
}