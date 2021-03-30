import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <Wrapper>
      <HeaderElement>
        <MenuButton onClick={() => setshowMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </MenuButton>
        <Link href="/">
          <Image src="/images/surfer.png" alt="surfer" />
        </Link>
        <Link href="https://github.com/surfcodes/surf">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
          </svg>
        </Link>
      </HeaderElement>
      <Menu className={showMenu ? "open" : null}>
        <MenuItem onClick={() => setshowMenu(!showMenu)}>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={() => setshowMenu(!showMenu)}>
          <Link href="/docs">Docs</Link>
        </MenuItem>
        <MenuItem onClick={() => setshowMenu(!showMenu)}>
          <Link href="/blog">Blog</Link>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

const HeaderElement = styled.header`
  @media (max-width: 1022px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100;

    --margin-x: 0.5rem;
    margin-left: var(--margin-x);
    margin-right: var(--margin-x);

    background: #fff;
    padding: 1rem 1.25rem;
  }

  display: none;
`;

const Image = styled.img`
  width: 26px;
  height: 26px;
`;

const Menu = styled.nav`
  display: none;
`;

const MenuButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  font: inherit;
  outline: inherit;

  display: flex;
  align-items: center;

  border-radius: 0.4rem;

  &:hover {
    background: #e5e7eb;
  }
`;

const MenuItem = styled.span`
  padding: 0.8rem;
  margin: 0.2rem 0;

  font-size: 1.4rem;

  border-radius: 0.5rem;

  &:hover {
    background: #f3f4f6;
  }
`;
