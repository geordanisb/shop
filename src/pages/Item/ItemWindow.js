import React,{useState} from 'react';
import {
  Typography,
} from '@material-ui/core';
import Item from '../../classes/Item';
import Window from '../../components/Window';
import {useHistory} from 'react-router-dom';
export default ({row}) => {
  let history = useHistory();debugger;
  let specs_ = Object.keys(Item.__description__.fields).map(f=>({f:row[f]}));
  let [specs,setSpecs] = useState(specs_);
  function submitHandler(row){
    console.log(row);
    history.push(`/ItemWindow/${row.id}`);
  }
  function cancelHandler(row){
    history.push('/ItewListWindow');
  }
  function inputChangeHandler(key,e){
    console.log(e.target.value,key,e);
    setSpecs(Object.assign({},specs,{key:e.target.value}));
  }
  return (<>
    <Typography variant="h4">Item</Typography>
    <Window 
      RecordClass={Item} 
      Record={specs}
      submitHandler={submitHandler}
      cancelHandler={cancelHandler}
      inputChangeHandler={inputChangeHandler}
    />
  </>
  )
};