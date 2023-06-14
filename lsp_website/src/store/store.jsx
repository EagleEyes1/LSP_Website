import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import userSlice from "./userSlice"
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    user: userSlice
})

const persistConfig = {
    key: "root",
    storage: storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store)

export { store, persistor }