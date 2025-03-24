import { createApi } from "@reduxjs/toolkit/query/react";
import { getTodosApi } from "../services/get-todos-services";
import { baseApiConfig } from "../lib/redux-toolkit-query";
import { TodosDataType } from "../types/todos.interface";

export const todosApi = createApi({
    ...baseApiConfig(getTodosApi, 'todosApi'),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getAllTodos: builder.query<TodosDataType[], void>({
            query: () => '/todos',
            providesTags: [{ type: 'Todos', id: 'LIST' }]
        }),
        getTodoById: builder.query<TodosDataType, string>({
            query: (id) => `/todos/${id}`,
            providesTags: (_, __, id) => [{ type: 'Todos', id }]
        }),
    }),
});

export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todosApi;
