import { types } from "../components/types/types";

export const setError=(err)=>{
    return{
        type: types.uiSetError,
        payload: err
        
    }
}

export const RemoveError=()=>({
    type: types.uiRemoveError,

})

export const uiStartLoading =()=>{
    return {
        type: types.uiStartLoading
    }
}

export const uiFinishLoading =()=>{
    return {
        type: types.uiFinishLoading
    }
}
