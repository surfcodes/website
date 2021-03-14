import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";

import CodeBlock from "components/CodeBlock";

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

export default function BlogPost({ children }) {
  return (
    <Wrap>
      <MDXProvider components={components}>
        <Wrap>{children}</Wrap>
      </MDXProvider>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  --space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--space-y-reverse));

  margin: 0 12vw;

  a {
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
