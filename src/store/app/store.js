import { configureStore, combineReducers } from "@reduxjs/toolkit";
import quizReducer from '../../features/iframeSrc/quizUrlSlice';
import authReducer from '../../features/iframeSrc/auth-slice';
// import quizUrlSlice from "../../features/iframeSrc/quizUrlSlice";


// imports for persisting store data //
// import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

// STORE SETUP WITHOUT PERSIST

// export default configureStore({
//     reducer: {
//         quiz: quizReducer,
//         authSlice: authReducer,
//     },
// })


// Combined Reducer Solution ///
const rootReducer = combineReducers({
    quiz: quizReducer,
    authSlice: authReducer

});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({reducer: persistedReducers,  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),});

const persistor = persistStore(store);

export {store, persistor};
