import styled from "@emotion/styled";
import Link from "next/link";

export default function HeaderItem(props) {
  return (
    <HItem>
      <Link href={props.link}>{props.content}</Link>
    </HItem>
  );
}

const HItem = styled.div`
  padding: 0.5rem;
  font-style: normal;
  font-size: 0.9rem;
  line-height: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  --margin-x: 0.6rem;
  margin-left: var(--margin-x);
  margin-right: var(--margin-x);

  & > a {
    color: #8b8b8b;
  }
`;
