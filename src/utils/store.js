import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import ChatSlice from "./ChatSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        searchCache: searchSlice,
        chat:ChatSlice
    },
});

export default store;