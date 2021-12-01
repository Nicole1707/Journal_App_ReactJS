import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword} from 'firebase/auth';
import { types } from '../components/types/types';
import { googleAuthProvider } from '../firebase/firebase-config';
import { uiFinishLoading, uiStartLoading } from './iu';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        //start
        dispatch(uiStartLoading())
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email,password)
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName));
            dispatch(uiFinishLoading());
            //end
        }).catch(
            e=>{
                console.log(e);
                dispatch(uiFinishLoading());
            }
        )

    }

    // dispatch(login(123, 'Pedro'));
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async({ user }) => {
               await updateProfile(auth.currentUser, {displayName: name})
                // console.log(user);
                dispatch(login(user.uid, user.displayName));
                
            }).catch(
                e=>{
                    console.log(e);
                }
            )
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });
    }
}
export const login = (uid, displayName) =>
({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

