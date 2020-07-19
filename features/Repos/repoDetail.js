import React from "react";
import { useSelector } from "react-redux";
import { selectRepos } from "./reposSlice";

const RepoDetail = () => {
  const { repoDetail, error, loading, repos } = useSelector(selectRepos);

  if (loading === "pending") return <div>loading</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h3>{repoDetail?.full_name}</h3>
      <p>by {repoDetail?.owner?.login}</p>
      <pre>{JSON.stringify(repoDetail, null, 5)}</pre>
    </div>
  );
};

export default RepoDetail;
