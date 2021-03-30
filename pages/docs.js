import Head from "next/head";
import styled from "@emotion/styled";

import Documentation from "components/layout/Documentation";

function importAll(r) {
  return r.keys().map(r);
}

const docsItems = importAll(require.context("./docs", false, /.mdx$/));

function Docs() {
  return (
    <Main>
      <Documentation>
        <Head>
          <title>surf.codes - Docs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1>Docs</h1>
        {docsItems.map((item) => (
          <Entry>
            <EntryTitle>
              <a href={item.meta.slug}>
                {item.meta.icon} {item.meta.title}
              </a>
            </EntryTitle>
            <EntrySubTitle>{item.meta.description}</EntrySubTitle>
          </Entry>
        ))}
      </Documentation>
    </Main>
  );
}

export default Docs;

const Main = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  @media (max-width: 380px) {
    display: flex;
  }
`;

const Entry = styled.div`
  padding: 3vh 6vw;

  width: 100%;

  box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 10px;

  transition-duration: 200ms;

  &:hover {
    transform: scale(1.1);
    transition-duration: 200ms;
  }
`;
const EntryTitle = styled.h1`
  font-size: 1.3rem;
`;

const EntrySubTitle = styled.p`
  font-size: 1.1rem;

  color: #444545;
`;
