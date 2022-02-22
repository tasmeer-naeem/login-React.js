
import { applyMiddleware  , createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './RootReducer';

var middleware=[]

var store=createStore(RootReducer,composeWithDevTools(applyMiddleware(...middleware),));

export default store;