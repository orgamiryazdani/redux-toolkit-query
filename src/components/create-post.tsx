import toast from "react-hot-toast";
import { useCreatePostMutation } from "../api/posts-api";
import Error from "./error";

const CreatePost = () => {
  const [createPost, { isLoading, error, isSuccess }] = useCreatePostMutation();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    if (!title || !body) return toast.error("Please fill in all fields.");

    const newPostData = {
      userId: 1,
      title,
      body,
    };

    await createPost(newPostData);
  };

  if (isSuccess) toast.success("New post created successfully.");

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='title...'
        name='title'
      />
      <input
        type='text'
        placeholder='body...'
        name='body'
      />
      <button type='submit'>Submit</button>
      {isLoading && <p>Loading...</p>}
      {error ? <Error error={error} /> : null}
    </form>
  );
};

export default CreatePost;
