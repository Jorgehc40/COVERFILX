import { configureStore } from "@reduxjs/toolkit";
import coverflixSlice from "./coverflixSlice";

export const store = configureStore({
    reducer: {
        coverflix: coverflixSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
