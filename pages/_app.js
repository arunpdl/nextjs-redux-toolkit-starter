import { wrapper } from "app/store";
import "assets/styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
