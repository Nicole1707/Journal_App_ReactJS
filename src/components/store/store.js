import { combineReducers, createStore,applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { auhtReducer } from "../../reducers/authReducer";
import { uiReducer } from "../../reducers/iuReducer";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: auhtReducer,
    iu: uiReducer,


})
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


