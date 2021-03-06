import Head from "next/head";
import styled from "@emotion/styled";

import Header from "../components/Header";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>surf.codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner>
        <BannerTitle>Surf your code like a pro</BannerTitle>
        <BannerSubtitle>
          All you’ll ever need for frontend development. A hackable tool that's
          designed for hackers.
        </BannerSubtitle>
        <StartButton href="https://github.surf/">Start now</StartButton>
      </Banner>
      <Content></Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  --space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--space-y-reverse));
`;

const Content = styled.div`
  display: block;
  padding: 1rem 4rem;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center
  padding: 0.5rem;
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 3.5rem;
  --padding-x: 8vw;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
`;

const BannerSubtitle = styled.div`
  font-size: 1.3rem;
  color: #444545;

  --padding-x: 30vw;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
`;

const StartButton = styled.a`
  color: #fff;
  background: #2562ff;

  display: block;
  text-align: center;

  border: none;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 23rem;

  padding: 2vh 4vw;
  margin-top: 3vh;

  --margin-x: 43vw;
  margin-left: var(--margin-x);
  margin-right: var(--margin-x);
`;
