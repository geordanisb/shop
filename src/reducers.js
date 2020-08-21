import {
    CHANGE_SEARCHFIELD,
    REQUESTS_ROBOTS_PENDING,
    REQUESTS_ROBOTS_SUCCESSS,
    REQUESTS_ROBOTS_FAILED
}from './constants';

const initialStateSearchRobots = {
    searchField:''
}

export const searchRobots = (state=initialStateSearchRobots,action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({},state,{searchField:action.payload})
        default: 
            return state
    } 
}

const initialStateRequestRobots = {
    robots:[],
    isPending:false,
    error:null
}

export const requestRobots = (state = initialStateRequestRobots, action={}) => {
    switch (action.type) {
        case REQUESTS_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUESTS_ROBOTS_SUCCESSS:
            return Object.assign({},state,{isPending:false,robots:action.payload});
        case REQUESTS_ROBOTS_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload});
        default: return state;
    }
}