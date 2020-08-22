import {
    CHANGE_SEARCHFIELD,
   
REQUESTS_ITEM_PENDING,
REQUESTS_ITEM_SUCCESSS,
REQUESTS_ITEM_FAILED,
GET_ITEM_BY_ID,

REQUESTS_DEPARTMENT_PENDING,
REQUESTS_DEPARTMENT_SUCCESSS,
REQUESTS_DEPARTMENT_FAILED,

REQUESTS_CATEGORY_PENDING,
REQUESTS_CATEGORY_SUCCESSS,
REQUESTS_CATEGORY_FAILED,

}from './constants';

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
    fetch(url)
    .then(response=> response.json())
    .then(data => dispatch({type:REQUESTS_ITEM_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:REQUESTS_ITEM_FAILED,payload:err}));
}

export const getItemById = (id)=>({
    type:GET_ITEM_BY_ID,
    payload:id
})

export const requestDepartmentCategories = ()=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Department`;
    dispatch({type:REQUESTS_DEPARTMENT_PENDING});
    fetch(url)
    .then(response=> response.json())
    .then(data => dispatch({type:REQUESTS_DEPARTMENT_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:REQUESTS_DEPARTMENT_FAILED,payload:err}));
}

export const requestCategories = ()=>(dispatch) =>{
    let url = `http://my-json-server.typicode.com/geordanisb/shop/Category`;
    dispatch({type:REQUESTS_CATEGORY_PENDING});
    fetch(url)
    .then(response=> response.json())
    .then(data => dispatch({type:REQUESTS_CATEGORY_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:REQUESTS_CATEGORY_FAILED,payload:err}));
}