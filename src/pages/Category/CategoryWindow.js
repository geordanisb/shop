import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import Category from '../../classes/Category';
import Window from '../../components/Window';
import {useHistory} from 'react-router-dom';
export default ({row}) => {
  let history = useHistory();

  function submitHandler(row){
    console.log(row);
    history.push(`/CategoryWindow/${row.id}`);
  }
  function cancelHandler(row){
    history.push('/CategoryListWindow');
  }
  return (<>
    <Typography variant="h4">Category</Typography>
    <Window 
      RecordClass={Category} 
      Record={row}
      submitHandler={submitHandler}
      cancelHandler={cancelHandler}
    />
  </>
  )
};