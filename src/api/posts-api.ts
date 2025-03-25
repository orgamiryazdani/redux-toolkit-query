import { createApi } from "@reduxjs/toolkit/query/react";
import { baseApiConfig } from "../lib/redux-toolkit-query";
import { createPostsApi } from "../services/posts-services";
import { PostsDataType } from "../types/posts.types";

export const postsApi = createApi({
    ...baseApiConfig(createPostsApi, 'postsApi'),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        createPost: builder.mutation<{ id: number }, PostsDataType>({
            query: (newPost) => ({
                url: "/posts",
                method: "POST",
                body: newPost,
            }),
        }),
    }),
});

export const { useCreatePostMutation } = postsApi;
