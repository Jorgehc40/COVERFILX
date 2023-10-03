import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: {}
}

export const coverflixSlice = createSlice({
    name: 'coverflix',
    initialState,
    reducers: {
        getMovieInfo: (state, action) => {
            state.movie = action.payload;
        }
    }
})

export const { getMovieInfo } = coverflixSlice.actions;

export default coverflixSlice.reducer;