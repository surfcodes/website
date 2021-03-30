import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

import Sidebar from "components/docs/Sidebar";
import CodeBlock from "components/CodeBlock";

function importAll(r) {
  return r.keys().map(r);
}
const docsItems = importAll(require.context("pages/docs", false, /.mdx$/));

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

export default function Documentation({ children, meta }) {
  return (
    <Main>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Sidebar>{docsItems}</Sidebar>
      <MDXProvider components={components}>
        <Wrap>
          <div>{children}</div>
        </Wrap>
      </MDXProvider>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 12vw;
  max-width: 100%;

  @media (max-width: 380px) {
    flex-direction: column;
    max-width: 100vw;

    margin-left: 6vw;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: start;

  --space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--space-y-reverse));

  margin-left: 5vw;
  margin-right: 12vw;

  max-width: 60%;

  overflow: none;

  line-height: 1.5;

  a {
    text-decoration: underline;
  }

  blockquote  {
    padding-left: 0.5rem;
    border-left: 2px solid #9ca3af;
  }

  code {
    padding: 1px;
    border-radius: 2px;

    font-family: monospace;
    font-size: 1.1rem;
    font-weight: 10px;
  }

  code:before {
    content: "\`";
  }

  code:after {
    content: "\`";
  }

  @media (max-width: 380px) {
    display: block;
    overflow: hidden;
    max-width: 80vw;
    margin-left: 1vw;
    margin-right: 1vw;

    justify-content: safe;
  }
`;
