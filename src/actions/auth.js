import { getAuth, signInWithPopup } from 'firebase/auth';
import { types } from '../components/types/types';
import { googleAuthProvider } from '../firebase/firebase-config';


export const startLoginEmailPassword =()=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(login(123, 'Pedro'));
        }, 3500);
    }
}
export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
    }
}
export const login = (uid, displayName)=>
   ( {
        type: types.login,
        payload: {
            uid,
            displayName
        }
        
    }
)