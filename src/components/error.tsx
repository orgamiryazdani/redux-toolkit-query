const Error = ({
  error,
  refetch,
}: {
  error: string | unknown;
  refetch?: () => void;
}) => {
  const refetchHandler = () => {
    if (refetch) refetch();
  };

  return (
    <div>
      <p>{error as string}</p>
      <button onClick={refetchHandler}>try again</button>
    </div>
  );
};

export default Error;
