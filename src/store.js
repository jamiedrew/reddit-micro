import {createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {RootReducer} from './Reducers/RootReducer.js';

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));