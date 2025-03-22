import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { readData } from "../core/http-service"

export const getTodosApi: BaseQueryFn<string, unknown, unknown> = async (url) => {
    try {
        const data = await readData(url);
        return { data };
    } catch (error: any) {
        return { error: error?.response?.data || error?.message };
    }
};