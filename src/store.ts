import { configureStore, Middleware, Reducer } from "@reduxjs/toolkit";
import { todosApi } from "./api/todos-api";
import { errorMiddleware } from "./lib/redux-toolkit-query";
import { postsApi } from "./api/posts-api";

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer as Reducer,
        [postsApi.reducerPath]: postsApi.reducer as Reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            todosApi.middleware as Middleware,
            postsApi.middleware as Middleware,
            errorMiddleware as Middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;