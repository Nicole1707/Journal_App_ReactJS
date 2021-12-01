import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { login } from '../actions/auth';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {

    const dispatch = useDispatch()
   
    useEffect(() => {
       const auth = getAuth();
       onAuthStateChanged(auth,(user)=>{
          if (user?.uid){
              dispatch(login(user.uid, user.displayName))
          }

       })
    }, [dispatch]) 



    return (
        <Router>
            <div>
                <Routes
>
                    <Route 
                    
                    path="/*"
                    element={<AuthRouter/>} />
                    

                    <Route 
                    exact path="/"
                    element={<JournalScreen/>} />
                </Routes>
            </div>
        </Router>
    )
}
