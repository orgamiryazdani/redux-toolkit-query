import { readData } from "../core/http-service"

export const getTodosApi = async (url: string) => {
    try {
        const data = await readData(url);
        return { data };
    } catch (error: unknown) {
        return { error: (error as { message: string }).message };
    }
};