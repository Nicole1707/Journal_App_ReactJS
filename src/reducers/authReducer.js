import { types } from "../components/types/types";

export const auhtReducer =(state={}, action)=>{
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        
            case types.logout:
                return{}
        
    
        default:
            return state;
    }

}