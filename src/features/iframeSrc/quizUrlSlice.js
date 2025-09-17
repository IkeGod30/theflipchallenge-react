import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        /// Create a routable page and use as initial state value for iframe src ///
        value: 'http://localhost:3000/def',
    },
    reducers:{
        laptopC: state => {
            state.value = 'https://www.onlinequizcreator.com/things-fall-apart/quiz-492336'
        },
        
        dollarC: state => {
            state.value = 'https://www.onlinequizcreator.com/purple-hibiscus/quiz-492496'
        },
        iphoneC: state => {
            state.value = 'https://www.onlinequizcreator.com/animal-farm/quiz-493767'
        },
        cruise: state => {
            state.value = 'https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884'
        },
        shopping: state => {
            state.value = 'https://www.onlinequizcreator.com/the-merchant-of-venice/quiz-493884'
        },
           

    }
    
})

export const { laptopC, dollarC, iphoneC, cruise, shopping } = quizSlice.actions
export default quizSlice.reducer