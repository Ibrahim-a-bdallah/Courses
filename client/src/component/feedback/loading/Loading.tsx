export type TLoading = "idle" | "pending" | "fulfilled" | "rejected";

type TStatus = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const Loading = ({ loading, error, children }: TStatus) => {
  if (loading === "pending") {
    return <h1>Please Wait...</h1>;
  }
  if (loading === "rejected") {
    return error === "Network Error" ? <p>Network Error</p> : <p>{error}</p>;
  }
  return <>{children}</>;
};

export default Loading;
