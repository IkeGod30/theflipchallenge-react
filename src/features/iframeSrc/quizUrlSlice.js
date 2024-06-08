import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        value: 'http://www.google.com',
    },
    reducers:{
        laptop: state => {
            state.value = 'http://www.cnn.com'
        },
        
        dollar: state => {
            state.value = 'http://www.bbc.com'
        },
        iphone: state => {
            state.value = 'http://www.abc.com'
        },
        cruise: state => {
            state.value = 'http://www.cnn.com'
        },
        shopping: state => {
            state.value = 'http://www.cnn.com'
        },
        // changeQuiz: (state, action) => {
        //     state.value = action.payload
        // }
        

    }
    
})

export const { laptop, dollar, iphone, cruise, shopping } = quizSlice.actions
export default quizSlice.reducer