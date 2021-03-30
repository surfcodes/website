import styled from "@emotion/styled";

import Sidebar from "components/docs/Sidebar";

function importAll(r) {
  return r.keys().map(r);
}
const docsItems = importAll(require.context("pages/docs", false, /.mdx$/));

export default function Documentation({ children }) {
  return (
    <Main>
      <Sidebar>{docsItems}</Sidebar>
      <Wrap>{children}</Wrap>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 12vw;
  width: 100%;

  @media (max-width: 380px) {
    flex-direction: column;
    max-width: 100vw;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  --space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--space-y-reverse));

  margin-left: 5vw;
  margin-right: 12vw;

  width: 100%;

  @media (max-width: 380px) {
    margin-left: 2vw;
    margin-right: 6vw;
    width: 70%;
  }
`;
