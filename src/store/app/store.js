import { configureStore } from "@reduxjs/toolkit";
import quizReducer from '../../features/iframeSrc/quizUrlSlice';
import authReducer from '../../features/iframeSrc/auth-slice';
// import quizUrlSlice from "../../features/iframeSrc/quizUrlSlice";


// imports for persisting store data //
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';



export default configureStore({
    reducer: {
        quiz: quizReducer,
        authSlice: authReducer,
    },
})
