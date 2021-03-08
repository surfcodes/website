import styled from "@emotion/styled";
import HeaderItem from "./HeaderItem";

import Link from "next/link";

export default function Header() {
  return (
    <HeaderElement>
      <HeaderStart>
        <Link href="/">
        <Image src="/images/surfer.png" alt="surfer" />
        </Link>
        <HeaderItems>
          <HeaderItem content="Docs" link="/docs" />
          <HeaderItem content="Blog" link="/blog" />
          <HeaderItem
            content="GitHub"
            link="https://github.com/surfcodes/surf"
          />
        </HeaderItems>
      </HeaderStart>
      <a href="https://github.com/surfcodes/surf" target="_blank">
        <Shields
          alt="GitHub Repo stars"
          src="https://img.shields.io/github/stars/surfcodes/surf?style=social"
        ></Shields>
      </a>
    </HeaderElement>
  );
}

const HeaderElement = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100;
  margin-bottom: 3rem;
  
  --margin-x: 7vw;
  margin-left: var(--margin-x);
  margin-right: var(--margin-x);

  background: #fff;
  padding: 1.5rem;
`;

const HeaderStart = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-left: 4.5vw;
`;

const Image = styled.img`
  width: 26px;
  height: 26px;
`;

const Shields = styled.img`
  height: 24px;
`;
