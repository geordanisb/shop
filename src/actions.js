import {   
REQUESTS_ITEM_PENDING,
REQUESTS_ITEM_SUCCESSS,
REQUESTS_ITEM_FAILED,

ADD_ITEM_SUCCESSS,
ADD_ITEM_PENDING,
ADD_ITEM_FAILED,

EDIT_ITEM_SUCCESSS,
EDIT_ITEM_PENDING,
EDIT_ITEM_FAILED,

DELETE_ITEM_SUCCESSS,
DELETE_ITEM_PENDING,
DELETE_ITEM_FAILED,

REQUESTS_DEPARTMENT_PENDING,
REQUESTS_DEPARTMENT_SUCCESSS,
REQUESTS_DEPARTMENT_FAILED,

ADD_DEPARTMENT_SUCCESSS,
ADD_DEPARTMENT_PENDING,
ADD_DEPARTMENT_FAILED,

EDIT_DEPARTMENT_SUCCESSS,
EDIT_DEPARTMENT_PENDING,
EDIT_DEPARTMENT_FAILED,

DELETE_DEPARTMENT_SUCCESSS,
DELETE_DEPARTMENT_PENDING,
DELETE_DEPARTMENT_FAILED,

REQUESTS_CATEGORY_PENDING,
REQUESTS_CATEGORY_SUCCESSS,
REQUESTS_CATEGORY_FAILED,

ADD_CATEGORY_SUCCESSS,
ADD_CATEGORY_PENDING,
ADD_CATEGORY_FAILED,

EDIT_CATEGORY_SUCCESSS,
EDIT_CATEGORY_PENDING,
EDIT_CATEGORY_FAILED,

DELETE_CATEGORY_SUCCESSS,
DELETE_CATEGORY_PENDING,
DELETE_CATEGORY_FAILED,

}
from './constants';

import axios from 'axios';

/////////***********Items */

export const requestItems = ()=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Item`;
    dispatch({type:REQUESTS_ITEM_PENDING});
    axios.get(url)
    .then(({data}) => {
        dispatch({type:REQUESTS_ITEM_SUCCESSS,payload:data})
    })
    .catch(err =>dispatch({type:REQUESTS_ITEM_FAILED,payload:err}));
}

export const addItem = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Item`;
    dispatch({type:ADD_ITEM_PENDING});
    axios.post(url,{
        data:payload
    })
    .then(({data}) => dispatch({type:ADD_ITEM_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:ADD_ITEM_FAILED,payload:err}));
}

export const editItem = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Item/${payload.id}`;
    dispatch({type:EDIT_ITEM_PENDING});
    axios.put(url,{
        data:payload
    })
    .then(({data}) => dispatch({type:EDIT_ITEM_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:EDIT_ITEM_FAILED,payload:err}));
}

export const deleteItem = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Item`;
    dispatch({type:DELETE_ITEM_PENDING});
    axios.delete(url,payload)
    .then(({data}) => dispatch({type:DELETE_ITEM_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:DELETE_ITEM_FAILED,payload:err}));
}

/*************************Department */

export const requestDepartments = ()=>(dispatch) =>{debugger;
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Department`;
    dispatch({type:REQUESTS_DEPARTMENT_PENDING});
    axios.get(url)
    .then(({data}) => {
        dispatch({type:REQUESTS_DEPARTMENT_SUCCESSS,payload:data})
    })
    .catch(err =>dispatch({type:REQUESTS_DEPARTMENT_FAILED,payload:err}));
}

export const addDepartment = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Department`;
    dispatch({type:ADD_DEPARTMENT_PENDING});
    axios.post(url,{
        data:payload
    })
    .then(({data}) => dispatch({type:ADD_DEPARTMENT_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:ADD_DEPARTMENT_FAILED,payload:err}));
}

export const editDepartment = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Department/${payload.id}`;
    dispatch({type:EDIT_DEPARTMENT_PENDING});
    axios.put(url,{
        data:payload
    })
    .then(({data}) => dispatch({type:EDIT_DEPARTMENT_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:EDIT_DEPARTMENT_FAILED,payload:err}));
}

export const deleteDepartment = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Department`;
    dispatch({type:DELETE_DEPARTMENT_PENDING});
    axios.delete(url,payload)
    .then(({data}) => dispatch({type:DELETE_DEPARTMENT_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:DELETE_DEPARTMENT_FAILED,payload:err}));
}

/*************************Category */

export const requestCategories = ()=>(dispatch) =>{debugger;
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Category`;
    dispatch({type:REQUESTS_CATEGORY_PENDING});
    axios.get(url)
    .then(({data}) => {
        dispatch({type:REQUESTS_CATEGORY_SUCCESSS,payload:data})
    })
    .catch(err =>dispatch({type:REQUESTS_CATEGORY_FAILED,payload:err}));
}

export const addCategory = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Category`;
    dispatch({type:ADD_CATEGORY_PENDING});
    axios.post(url,{
        data:payload
    })
    .then(({data}) => dispatch({type:ADD_CATEGORY_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:ADD_CATEGORY_FAILED,payload:err}));
}

export const editCategory = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Category/${payload.id}`;
    dispatch({type:EDIT_CATEGORY_PENDING});
    axios.put(url,{
        data:payload
    })
    .then(({data}) => dispatch({type:EDIT_CATEGORY_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:EDIT_CATEGORY_FAILED,payload:err}));
}

export const deleteCategory = (payload)=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Category`;
    dispatch({type:DELETE_CATEGORY_PENDING});
    axios.delete(url,payload)
    .then(({data}) => dispatch({type:DELETE_CATEGORY_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:DELETE_CATEGORY_FAILED,payload:err}));
}