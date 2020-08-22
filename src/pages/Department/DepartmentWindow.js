import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import Department from '../../classes/Department';
import Window from '../../components/Window';
import {useHistory} from 'react-router-dom';
export default ({row}) => {
  let history = useHistory();

  function submitHandler(row){
    console.log(row);
    history.push(`/DepartmentWindow/${row.id}`);
  }
  function cancelHandler(row){
    history.push('/DepartmentListWindow');
  }
  return (<>
    <Typography variant="h4">Department</Typography>
    <Window 
      RecordClass={Department} 
      Record={row}
      submitHandler={submitHandler}
      cancelHandler={cancelHandler}
    />
  </>
  )
};