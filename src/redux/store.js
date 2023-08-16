import { classesApi } from "./api/class/classApi";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({

    reducer: {
        [classesApi.reducerPath]: classesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(classesApi.middleware)
})
export default store