import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { types } from '../components/types/types';
import { googleAuthProvider } from '../firebase/firebase-config';
import { uiFinishLoading, uiStartLoading } from './iu';
import { noteLogout } from './notes';
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        //start
        dispatch(uiStartLoading())
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(uiFinishLoading());
                //end
            }).catch(e => {
                console.log(e.message);
                dispatch(uiFinishLoading());
                Swal.fire('Error', e.message, 'error');
            }
            )

    }

    // dispatch(login(123, 'Pedro'));
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                // console.log(user);
                dispatch(login(user.uid, user.displayName));

            }).catch(
                e => {
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

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(logout());
            dispatch(noteLogout());
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }
}

export const logout = () => ({
    type: types.logout,
})
