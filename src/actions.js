import {
    CHANGE_SEARCHFIELD,
   
REQUESTS_ITEM_PENDING,
REQUESTS_ITEM_SUCCESSS,
REQUESTS_ITEM_FAILED,

EDIT_ITEM_SUCCESSS,
EDIT_ITEM_PENDING,
EDIT_ITEM_FAILED,

DELETE_ITEM_SUCCESSS,
DELETE_ITEM_PENDING,
DELETE_ITEM_FAILED,

REQUESTS_DEPARTMENT_PENDING,
REQUESTS_DEPARTMENT_SUCCESSS,
REQUESTS_DEPARTMENT_FAILED,

REQUESTS_CATEGORY_PENDING,
REQUESTS_CATEGORY_SUCCESSS,
REQUESTS_CATEGORY_FAILED,

}from './constants';

import axios from 'axios';

export const setSearchText = (text)=>({
    type:CHANGE_SEARCHFIELD,
    payload:text
});

// export const setRobots = (robots)=>({
//     type:CHANGE_ROBOTS,
//     payload:robots
// });

export const requestItems = ()=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Item`;
    dispatch({type:REQUESTS_ITEM_PENDING});
    axios.get(url)
    .then(({data}) => {
        dispatch({type:REQUESTS_ITEM_SUCCESSS,payload:data})
    })
    .catch(err =>dispatch({type:REQUESTS_ITEM_FAILED,payload:err}));
}

export const editItem = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Item`;
    dispatch({type:EDIT_ITEM_PENDING});
    axios.put(url,payload)
    .then(({data}) => dispatch({type:EDIT_ITEM_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:EDIT_ITEM_FAILED,payload:err}));
}

export const deleteItem = (id)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Item`;
    dispatch({type:DELETE_ITEM_PENDING});
    axios.delete(url,id)
    .then(({data}) => dispatch({type:DELETE_ITEM_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:DELETE_ITEM_FAILED,payload:err}));
}


export const requestDepartmentCategories = ()=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Department`;
    dispatch({type:REQUESTS_DEPARTMENT_PENDING});
    axios.get(url)
    .then(({data}) => dispatch({type:REQUESTS_DEPARTMENT_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:REQUESTS_DEPARTMENT_FAILED,payload:err}));
}

export const requestCategories = ()=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Category`;
    dispatch({type:REQUESTS_CATEGORY_PENDING});
    axios.get(url)
    .then(({data}) => dispatch({type:REQUESTS_CATEGORY_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:REQUESTS_CATEGORY_FAILED,payload:err}));
}