import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import Category from '../../classes/Category';
import ListWindow from '../../components/ListWindow';
import {useHistory} from 'react-router-dom';
export default () => {
  let history = useHistory();

  function openWindowHandler(row){
    console.log(row);
    history.push(`/CategoryWindow/${row.id}`);
  }
  return (<>
    <Typography variant="h4">Categories</Typography>
    <ListWindow RecordClass={Category} openWindowHandler={openWindowHandler}/>
  </>
  )
};