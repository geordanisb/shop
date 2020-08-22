// import React,{useState} from 'react';
// import {
//   Typography,
// } from '@material-ui/core';
// import Item from '../../classes/Item';
// import Window from '../../components/Window';
// import {useHistory} from 'react-router-dom';
// export default ({row}) => {
//   let history = useHistory();debugger;
//   let specs_ = Object.keys(Item.__description__.fields).map(f=>({f:row[f]}));
//   let [specs,setSpecs] = useState(specs_);
//   function submitHandler(row){
//     console.log(row);
//     history.push(`/ItemWindow/${row.id}`);
//   }
//   function cancelHandler(row){
//     history.push('/ItewListWindow');
//   }
//   function inputChangeHandler(key,e){
//     console.log(e.target.value,key,e);
//     setSpecs(Object.assign({},specs,{key:e.target.value}));
//   }
//   return (<>
//     <Typography variant="h4">Item</Typography>
//     <Window 
//       Item={Item} 
//       Record={specs}
//       submitHandler={submitHandler}
//       cancelHandler={cancelHandler}
//       inputChangeHandler={inputChangeHandler}
//     />
//   </>
//   )
// };

import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { useParams, useHistory} from "react-router-dom";
import {
  TextField,
  Button,
  Paper,
  Container
} from '@material-ui/core';
import Item from '../../classes/Item';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
      },
}));

const ItemWindow = ({ items, handlerSubmit }) => {
  const classes = useStyles();
  let history = useHistory();
  let {id} = useParams();
  let {fields} =  Item.__description__;
  let filtered = items.filter(i=>`${i.id}`===id);
  let Record = filtered.length ? {...filtered[0]} : null;
  let [record,setRecord] = useState(Record)
  

  function inputChangeHandler(key,e){
    setRecord(Object.assign({},record,{[key]:e.target.value}));
  }
  
  function handlerCancel(){
    history.push('/ItemListWindow');
  }

  function createForm(){
    if(record){
      let res = [];
    let isTextField = ['string','value','integer'];
    for(let [key,spec] of Object.entries(fields)){
      if(isTextField.includes(spec.type)){
        let label = spec.label || key.toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
        res.push(
          <TextField 
            id={key} 
            key={key} 
            label={label} 
            value={record[key]}
            onChange={(e)=>inputChangeHandler(key,e)}
          />  
        );  
      }  
    }
    return <form className={classes.root} noValidate autoComplete="off">
      {res}
      <div style={{paddingBottom:'10px'}}>
          <Button variant="contained" color="primary" onClick={()=>handlerSubmit()}>Submit</Button>
          <Button variant="contained" color="secondary" onClick={()=>handlerCancel()}>Cancel</Button>
        </div>
    </form>     
    }
    
    
  }
  return (
    <Container component={Paper}>
      {createForm(Record)}
    </Container>
  );
  
}
const mapStateToProps = state => {
  return {
      items:state.ItemReducer.items,
  }
}
export default connect(mapStateToProps)(ItemWindow);