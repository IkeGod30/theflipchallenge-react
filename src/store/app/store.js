import { configureStore } from "@reduxjs/toolkit";
import quizReducer from '../../features/iframeSrc/quizUrlSlice';
import authReducer from '../../features/iframeSrc/auth-slice';
// import quizUrlSlice from "../../features/iframeSrc/quizUrlSlice";


export default configureStore({
    reducer: {
        quiz: quizReducer,
        authSlice: authReducer,
    },
})
