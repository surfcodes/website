import "../styles/globals.css";
import styled from "@emotion/styled";

import Header from "components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Header />
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;

const Page = styled.div`
  width: 100vw;
`;
