import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import courseReducer from "./features/courseSlice";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const reducers = combineReducers({
  user: userReducer,
  course: courseReducer,  
});

const persistConfig = { key: "root", storage, stateReconciler: autoMergeLevel2 };
const persistedReducer = persistReducer(persistConfig, reducers);

export const persistentStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})