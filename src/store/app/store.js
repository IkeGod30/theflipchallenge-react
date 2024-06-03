import { configureStore } from "@reduxjs/toolkit";
import quizReducer from '../../features/iframeSrc/quizUrlSlice';
// import quizUrlSlice from "../../features/iframeSrc/quizUrlSlice";


export default configureStore({
    reducer: {
        iframeSrc: quizReducer,
    },
})
