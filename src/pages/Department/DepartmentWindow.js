import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {editDepartment} from '../../actions';
import { useParams, useHistory} from "react-router-dom";
import {
  TextField,
  Button,
  Paper,
  Container
} from '@material-ui/core';
import Department from '../../classes/Department';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
      },
}));

const DepartmentWindow = ({ items, handlerSubmit }) => {
  const classes = useStyles();
  let history = useHistory();
  let {id} = useParams();
  let {fields} =  Department.__description__;
  let filtered = items.filter(i=>`${i.id}`===id);
  let Record = filtered.length ? {...filtered[0]} : null;
  let [record,setRecord] = useState(Record)
  

  function inputChangeHandler(key,e){
    setRecord(Object.assign({},record,{[key]:e.target.value}));
  }

  function handlerCancel(){
    history.push('/DepartmentListWindow');
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
          <Button variant="contained" color="primary" onClick={()=>handlerSubmit(record)}>Submit</Button>
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
      items:state.departmentReducer.data,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    handlerSubmit:(record)=>{
      return dispatch(editDepartment(record))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DepartmentWindow);