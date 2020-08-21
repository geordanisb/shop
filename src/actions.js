import {
    CHANGE_SEARCHFIELD,
    REQUESTS_ROBOTS_PENDING,
REQUESTS_ROBOTS_SUCCESSS,
REQUESTS_ROBOTS_FAILED,
}from './constants';

export const setSearchText = (text)=>({
    type:CHANGE_SEARCHFIELD,
    payload:text
});

// export const setRobots = (robots)=>({
//     type:CHANGE_ROBOTS,
//     payload:robots
// });

export const requestRobots = ()=>(dispatch) =>{
    dispatch({type:REQUESTS_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch({type:REQUESTS_ROBOTS_SUCCESSS,payload:data}))
    .catch(err =>dispatch({type:REQUESTS_ROBOTS_FAILED,payload:err}));
}