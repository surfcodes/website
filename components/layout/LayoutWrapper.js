import styled from "@emotion/styled";

export default function Wrapper({ children }) {
  return <Wrap>{children}</Wrap>;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  --space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--space-y-reverse));

  margin: 0 12vw;
`;
