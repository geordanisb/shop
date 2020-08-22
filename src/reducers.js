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

// const initialStateSearchRobots = {
//     searchField:''
// }

// export const searchRobots = (state=initialStateSearchRobots,action={}) => {
//     switch(action.type) {
//         case CHANGE_SEARCHFIELD:
//             return Object.assign({},state,{searchField:action.payload})
//         default: 
//             return state
//     } 
// }

const initialStateRequestItems = {
    items:[],
    isPending:false,
    error:null
}

export const ItemReducer = (state = initialStateRequestItems, action={}) => {
    switch (action.type) {
        case REQUESTS_ITEM_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUESTS_ITEM_SUCCESSS:
            return Object.assign({},state,{isPending:false,items:action.payload});
        case REQUESTS_ITEM_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload});
        
        case EDIT_ITEM_PENDING:
                return Object.assign({},state,{isPending:true});
        case EDIT_ITEM_FAILED:
                return Object.assign({},state,{isPending:false,error:action.payload});        
        case EDIT_ITEM_SUCCESSS:
            let index = state.findIndex(i=>i.id === action.id);
            let item = {...state.items[index],...action.payload};
            let items = state.items.splice(index,0,item)
            return Object.assign({},state,{items})
        default: return state;
    }
}

/******************* */

const initialStateRequestDepartments = {
    departments:[],
    isPending:false,
    error:null
}

export const DepartmentReducer = (state = initialStateRequestDepartments, action={}) => {
    switch (action.type) {
        case REQUESTS_DEPARTMENT_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUESTS_DEPARTMENT_SUCCESSS:
            return Object.assign({},state,{isPending:false,departments:action.payload});
        case REQUESTS_DEPARTMENT_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload});
        default: return state;
    }
}

/******************* */

const initialStateRequestCategories = {
    categories:[],
    isPending:false,
    error:null
}

export const CategoryReducer = (state = initialStateRequestCategories, action={}) => {
    switch (action.type) {
        case REQUESTS_CATEGORY_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUESTS_CATEGORY_SUCCESSS:
            return Object.assign({},state,{isPending:false,categories:action.payload});
        case REQUESTS_CATEGORY_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload});
        default: return state;
    }
}