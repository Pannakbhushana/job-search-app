import * as types from "./actionType";

const getTodoSuccessAction=(payload)=>{
    return {type:types.GET_TODO_SUCCESS,payload}
}


export {
    getTodoSuccessAction
};