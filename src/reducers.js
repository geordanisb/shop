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

}from './constants';

const stateItem = {    
    data:[],
    isPending:false,
    error:null
}

const stateDepartment = {
    data:[],
    isPending:false,
    error:null
}
const stateCategory = {
    data:[],
    isPending:false,
    error:null
}

export const itemReducer = (state = stateItem, action={}) => {
    switch (action.type) {
        case REQUESTS_ITEM_PENDING:debugger;
            return Object.assign({},state,{isPending:true});
        case REQUESTS_ITEM_SUCCESSS:
            return Object.assign({},state,{isPending:false,data:action.payload});
        case REQUESTS_ITEM_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload});
        
        case EDIT_ITEM_PENDING:
                return Object.assign({},state,{isPending:true});
        case EDIT_ITEM_FAILED:
                return Object.assign({},state,{isPending:false,error:action.payload});        
        case EDIT_ITEM_SUCCESSS:
            debugger;
            let index = state.data.findIndex(i=>i.id === action.payload.id);
            let item = {...state.data[index],...action.payload.data};
            state.data.splice(index,0,item);
            let data = state.data;
            return Object.assign({},state,{data});
        default: return state;
    }
}

/********************Department */
export const departmentReducer = (state = stateDepartment, action={}) => {
    switch (action.type) {
        case REQUESTS_DEPARTMENT_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUESTS_DEPARTMENT_SUCCESSS:
            return Object.assign({},state,{isPending:false,data:action.payload});
        case REQUESTS_DEPARTMENT_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload});
        
        case EDIT_DEPARTMENT_PENDING:
                return Object.assign({},state,{isPending:true});
        case EDIT_DEPARTMENT_FAILED:
                return Object.assign({},state,{isPending:false,error:action.payload});        
        case EDIT_DEPARTMENT_SUCCESSS:
            let index = state.data.findIndex(i=>i.id === action.payload.id);
            let item = {...state.data[index],...action.payload.data};
            state.data.splice(index,0,item);
            let data = state.data;
            return Object.assign({},state,{data});
        default: return state;
    }
}

/********************Category */
export const categoryReducer = (state = stateCategory, action={}) => {
    switch (action.type) {
        case REQUESTS_CATEGORY_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUESTS_CATEGORY_SUCCESSS:
            return Object.assign({},state,{isPending:false,data:action.payload});
        case REQUESTS_CATEGORY_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload});
        
        case EDIT_CATEGORY_PENDING:
                return Object.assign({},state,{isPending:true});
        case EDIT_CATEGORY_FAILED:
                return Object.assign({},state,{isPending:false,error:action.payload});        
        case EDIT_CATEGORY_SUCCESSS:
            let index = state.data.findIndex(i=>i.id === action.payload.id);
            let item = {...state.data[index],...action.payload.data};
            state.data.splice(index,0,item);
            let data = state.data;
            return Object.assign({},state,{data});
        default: return state;
    }
}
