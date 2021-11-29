import {
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
export const AuthRouter = () => {
    // console.log('jgjgj');
    return (
        <div className="auth__main">
            <div className="auth__box-container">

                <Routes>
                    <Route
                        exact
                        path="/auth/login"
                        element={<LoginScreen />} />
                    <Route exact
                        path="/auth/register"
                        element={<RegisterScreen />} />
                        {/* <Navigate to="/auth/register" />  */}
                </Routes>

            </div>


        </div>
    )
}
