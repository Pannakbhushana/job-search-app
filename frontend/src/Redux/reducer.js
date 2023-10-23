import * as types from "./actionType.js";

const initState={ 
    data:[]
}

export const reducer=(state=initState, action)=>{
    const {type,payload}=action;

    switch(type){

        case types.GET_TODO_SUCCESS:{
            return {...state, data:payload}
        }
        default:{
            return state;
        }
    }

}