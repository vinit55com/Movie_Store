import { configureStore } from '@reduxjs/toolkit';
import  movieReducer  from './reducers/MovieSlice';
import  tvReducer  from './reducers/TvSlices'; 
import  peopleReducer  from './reducers/personSlice';

export const store = configureStore({
   reducer: {
      movie: movieReducer,
      tv: tvReducer,
      people: peopleReducer,
   },
});
