import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        loadmovie: (state, action) => {
            state.info = action.payload;
        },
        removemovies: (state, action) => {
            state.info = null;
        },
    },
});

export const { loadmovie, removemovies } = movieSlice.actions; 
export default movieSlice.reducer;


