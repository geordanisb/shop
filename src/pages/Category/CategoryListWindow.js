import React,{useEffect} from 'react';
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
import Category from '../../classes/Category';
import {useHistory} from 'react-router-dom';
import {requestCategories} from '../../actions';
import {connect} from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const mapStateToProps = state => {
  return {
      items:state.categoryReducer.data,
      isPending:state.categoryReducer.isPending,
      error:state.categoryReducer.error,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
      onCategorysChange:()=>dispatch(requestCategories())
  }
}

const CategoryListWindow = ({items,isPending,error,onCategorysChange}) => {
  const classes = useStyles();
  let {fields} = Category.__description__;
  
  useEffect(function(){
    async function fetchCategorys(){
      onCategorysChange()  
    }
    fetchCategorys();
  },[onCategorysChange])

  let history = useHistory();
  function openWindowHandler(row){
        history.push(`/CategoryWindow/${row.id}`);
      }
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

  return (isPending
              ? <h2>Loading...</h2>
          :<TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
            <TableRow>
              {headerCells()}
            </TableRow>  
      </TableHead>
      <TableBody>
          {items.map((row) => (
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
  </TableContainer>);
};

export default connect(mapStateToProps,mapDispatchToProps)(CategoryListWindow);