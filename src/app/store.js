import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/postSlice"

export default configureStore({
    reducer: {
        posts : postsReducer,
    }
})