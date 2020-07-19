import { wrapper } from "app/store";
import Layout from "components/Layout";
import ReposComponent from "features/Repos/repoDetail";
import { loadRepoDetail } from "features/Repos/reposSlice";

const RepoDetail = ({}) => {
  return (
    <Layout title="Repos">
      <ReposComponent />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }) => {
    const { user, repo } = params;
    await store.dispatch(loadRepoDetail({ username: user, repo: repo }));
  }
);

export default RepoDetail;
