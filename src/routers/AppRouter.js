import React from 'react'
import {
    BrowserRouter as Router,

    Route,
    Routes
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
export const AppRouter = () => {
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
