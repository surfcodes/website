import "../styles/globals.css";
import styled from "@emotion/styled";

import Header from "components/Header";
import MobileHeader from "components/MobileHeader";


function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Header />
      <MobileHeader />
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;

const Page = styled.div`
  max-width: 100vw;
`;
