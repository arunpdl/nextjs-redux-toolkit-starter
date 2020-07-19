import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "components/Layout";
import ReposComponent from "features/Repos";

const Repos = ({}) => {
  return (
    <Layout title="Repos">
      <ReposComponent />
    </Layout>
  );
};

export default Repos;
