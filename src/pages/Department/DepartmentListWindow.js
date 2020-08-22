import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import Department from '../../classes/Department';
import ListWindow from '../../components/ListWindow';
import {useHistory} from 'react-router-dom';
export default () => {
  let history = useHistory();

  function openWindowHandler(row){
    console.log(row);
    history.push(`/DepartmentWindow/${row.id}`);
  }
  return (<>
    <Typography variant="h4">Departments</Typography>
    <ListWindow RecordClass={Department} openWindowHandler={openWindowHandler}/>
  </>
  )
};