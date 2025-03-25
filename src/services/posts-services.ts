import { createData } from "../core/http-service"

export const createPostsApi = async ({ url, newPostData }: { url: string, newPostData: any }) => {
    try {
        const data = await createData(url, newPostData);
        return { data };
    } catch (error: unknown) {
        return { error: (error as { message: string }).message };
    }
};