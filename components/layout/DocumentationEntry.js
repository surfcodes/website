import styled from "@emotion/styled";

import { MDXProvider } from "@mdx-js/react";

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

export default function Documentation({ children }) {
  return (
    <Main>
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
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;

  --space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--space-y-reverse));

  margin-left: 5vw;
  margin-right: 12vw;

  max-width: 60%;

  overflow: none;

  a {
    text-decoration: underline;
  }

  blockquote  {
    padding-left: 0.5rem;
    border-left: 2px solid #9ca3af;
  }

  code {
    padding: 3px;
    margin: 1px;
    border-radius: 2px;

    background-color: #e5e7eb;
    color: red;

    font-family: FiraCode;
    font-size: 0.8rem;
  }
`;
