import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRepos, selectRepos } from "./reposSlice";

const ReposComponent = () => {
  const dispatch = useDispatch();
  const { repos, error, loading } = useSelector(selectRepos);

  const [username, setUsername] = useState("arunpdl");

  // useEffect(() => {
  //   const dispatchLoadRepos = async () => {
  //     await dispatch(loadRepos());
  //   };
  //   dispatchLoadRepos();
  // }, [dispatch]);

  const handleLoadRepo = useCallback(
    (event) => {
      event.preventDefault();
      const dispatchLoadRepos = async () => {
        await dispatch(loadRepos(username));
      };
      dispatchLoadRepos();
    },
    [username, dispatch]
  );

  return (
    <>
      <input
        name="username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={handleLoadRepo} disabled={!username}>
        Load Repos
      </button>
      {repos?.length > 0 ? (
        <>
          <h1>Repositories</h1>
          <ul>
            {repos?.map((eachRepo) => (
              <li key={eachRepo.id}>{eachRepo.name}</li>
            ))}
          </ul>
        </>
      ) : loading === "loading" ? (
        <div>loading...</div>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default ReposComponent;
