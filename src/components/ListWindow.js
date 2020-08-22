import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListWindow = ({RecordClass,openWindowHandler}) => {
  const classes = useStyles();
  let {fields} = RecordClass.__description__;
  let [records,setRecords] = useState([]);
  
  useEffect(function (){
    let url = `http://my-json-server.typicode.com/geordanisb/shop/${RecordClass.name}`;
    async function getData(){
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      
      let {data} = await axios.get(url,{
        cancelToken: source.token
      });
      setTimeout(() => {
        source.cancel('Server does not respond');
      }, 3000);
      setRecords(data);
    }
    getData();
  },[RecordClass.name]);

  

  function headerCells(){
    let res = [];
    for(let [key,spec] of Object.entries(fields)){
      let label = spec.label || key.toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
      res.push(<TableCell align="center" key={key}>{label}</TableCell>);  
    }    
    res.push(<TableCell align="center" key="actions">Actions</TableCell>)
    return res;  
  }

  function cellActions(row){
    return <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
    <Button onClick={()=>openWindowHandler(row)}><EditIcon/>Edit</Button>
    <Button color="secondary"><DeleteIcon />Delete</Button>
  </ButtonGroup>
  }

  return <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
            <TableRow>
              {headerCells()}
            </TableRow>  
      </TableHead>
      <TableBody>
          {records.map((row) => (
            <TableRow key={row.id} onClick={()=>console.log(row)}>
              {[...Object.entries(fields).map(i=>{
                let [key,] = i;
                let value = row[key];
              return <TableCell align="center" key={`${row.id}${key}`}>{value}</TableCell>
              }),<TableCell align="center" key={`${row.id}actions`}>{
                cellActions(row)
              }</TableCell>]}
            </TableRow>
          ))}
        </TableBody>
    </Table>
  </TableContainer>
};

export default ListWindow;