// import React from 'react';
// import {
//   Typography,
// } from '@material-ui/core';
// import Item from '../../classes/Item';
// import ListWindow from '../../components/ListWindow';
// import {useHistory} from 'react-router-dom';
// export default () => {
//   let history = useHistory();

//   function openWindowHandler(row){
//     console.log(row);
//     history.push(`/ItemWindow/${row.id}`);
//   }
//   return (<>
//     <Typography variant="h4">Items</Typography>
//     <ListWindow RecordClass={Item} openWindowHandler={openWindowHandler}/>
//   </>
//   )
// };

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
import Item from '../../classes/Item';
import {useHistory} from 'react-router-dom';
import {requestItems} from '../../actions';
import {connect} from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const mapStateToProps = state => {debugger;
  return {
      // searchField:state.searchRobots.searchField,
      items:state.ItemReducer.items,
      isPending:state.ItemReducer.isPending,
      error:state.ItemReducer.error,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
      // onSearchChange: (event)=> {
      //     console.log(this)
      //     return dispatch(setSearchText(event.target.value))
      // },
      onItemsChange:()=>dispatch(requestItems())
  }
}

const ListWindow = ({items,isPending,error,onItemsChange}) => {
  const classes = useStyles();
  let {fields} = Item.__description__;
  // let [records,setRecords] = useState([]);

  useEffect(function(){
    async function fetchItems(){
      onItemsChange()  
    }
    fetchItems();
  },[onItemsChange])

  let history = useHistory();
  function openWindowHandler(row){
        console.log(row);
        history.push(`/ItemWindow/${row.id}`);
      }
  
  // useEffect(function (){
  //   let url = `http://my-json-server.typicode.com/geordanisb/shop/Item`;
  //   async function getData(){
  //     const CancelToken = axios.CancelToken;
  //     const source = CancelToken.source();
      
  //     let {data} = await axios.get(url,{
  //       cancelToken: source.token
  //     });
  //     setTimeout(() => {
  //       source.cancel('Server does not respond');
  //     }, 3000);
  //     setRecords(data);
  //   }
  //   getData();
  // },[]);

  

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

export default connect(mapStateToProps,mapDispatchToProps)(ListWindow);