import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./api/todos-api";
import { errorMiddleware } from "./lib/redux-toolkit-query";

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware, errorMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
