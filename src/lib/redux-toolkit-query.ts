import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';

export const baseApiConfig = (baseQuery: BaseQueryFn, reducerPath: string) => ({
    reducerPath,
    baseQuery,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    keepUnusedDataFor: 300,
    defaultOptions: {
        queries: {
            refetchOnFocus: true,
            refetchOnReconnect: true,
            keepUnusedDataFor: 300,
        },
        mutations: {
            retry: 2,
        },
    },
});


export const errorMiddleware: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        const errorMessage = action.payload || 'خطایی رخ داد';
        alert(errorMessage)
    }
    return next(action);
};
