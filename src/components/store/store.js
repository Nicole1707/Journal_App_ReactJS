import { combineReducers, createStore,applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { auhtReducer } from "../../reducers/authReducer";
import { uiReducer } from "../../reducers/iuReducer";
import {notesReducer} from "../../reducers/notesReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: auhtReducer,
    iu: uiReducer,
    notes: notesReducer,


})
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


