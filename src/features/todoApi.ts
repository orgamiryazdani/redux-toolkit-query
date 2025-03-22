import { createApi } from "@reduxjs/toolkit/query/react";
import { getTodosApi } from "../services/get-todos-services";

export const todosApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: getTodosApi,
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => '/todos',
        }),
        getTodoById: builder.query({
            query: (id) => `/todos/${id}`,
        }),
    }),
});

export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todosApi;
