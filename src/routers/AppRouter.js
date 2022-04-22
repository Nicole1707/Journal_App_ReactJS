import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { login } from "../actions/auth";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setchecking] = useState(true);
    const [isLoggedin, setisLoggedin] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisLoggedin(true);
            } else {
                setisLoggedin(false);
            }
            setchecking(false);
        });
    }, [dispatch, setchecking, setisLoggedin]);
    if (checking) {
        return <h1>Espere</h1>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/auth/*"
                    element={
                        <PublicRoute
                            component={AuthRouter}
                            isAuthenticated={isLoggedin}
                        />
                    }
                />

                <Route
                    path="/*"
                    element={
                        <PrivateRoute
                            component={JournalScreen}
                            isAuthenticated={isLoggedin}

                        />
                    }
                ></Route>


            </Routes>
        </BrowserRouter>
    );
};
