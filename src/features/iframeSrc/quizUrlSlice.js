import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        value: 'http://www.google.com',
    },
    reducers:{
        laptopC: state => {
            state.value = 'http://www.cnn.com'
        },
        
        dollarC: state => {
            state.value = 'http://www.bbc.com'
        },
        iphoneC: state => {
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

export const { laptopC, dollarC, iphoneC, cruise, shopping } = quizSlice.actions
export default quizSlice.reducer