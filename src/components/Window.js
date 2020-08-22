import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Paper,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
      },
}));

const Window = ({ RecordClass, Record, inputChangeHandler, handlerSubmit, handlerCancel }) => {
  const classes = useStyles();
  let {fields} =  RecordClass.__description__;
  function createForm(){
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
            value={Record[key]}
            onChange={(e)=>inputChangeHandler(key,e)}
          />  
        );  
      }  
    }
    return <Container component={Paper}>
      <form className={classes.root} noValidate autoComplete="off">
      {res}
      <div style={{paddingBottom:'10px'}}>
      <Button variant="contained" color="primary" onClick={()=>handlerSubmit(Record)}>Submit</Button>
      <Button variant="contained" color="secondary" onClick={()=>handlerCancel(Record)}>Cancel</Button>
      </div>
      </form>
      </Container>
  }
  return createForm();
  
}
export default Window;