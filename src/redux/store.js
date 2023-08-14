import {configureStore} from "@reduxjs/toolkit";
import { listReducer } from "./reducers/listReducers";


const store = configureStore({reducer:listReducer});

export default store;