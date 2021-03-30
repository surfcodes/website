import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

import CodeBlock from "components/CodeBlock";

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

export default function BlogPost({ children, meta }) {
  return (
    <Wrap>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <MDXProvider components={components}>
        <Main>{children}</Main>
      </MDXProvider>
    </Wrap>
  );
}
const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6vw;
  margin-right: 6vw;
  max-width: 100%;

  @media (max-width: 380px) {
    max-width: 100vw;

    margin-left: 3vw;
    margin-right: 3vw;
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: start;

  --space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--space-y-reverse));

  margin-left: 10vw;

  line-height: 1.5;

  a  {
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

  img {
    max-width: 70vw;
    height: auto;
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
