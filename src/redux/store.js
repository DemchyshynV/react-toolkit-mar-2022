import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, carReducer} from "./slices";


const rootReducer = combineReducers({
    cars: carReducer,
    auth: authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
