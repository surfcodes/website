import Head from "next/head";
import styled from "@emotion/styled";

import Wrapper from "components/layout/LayoutWrapper";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>surf.codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner>
        <BannerTitle>Surf your code like a pro</BannerTitle>
        <BannerSubtitle>
          All you’ll ever need for frontend development. A hackable tool that's
          designed for hackers.
        </BannerSubtitle>
        <StartButton href="https://github.surf/" target="_blank">
          Start now
        </StartButton>
      </Banner>
      <br></br>
      <Content></Content>
    </Wrapper>
  );
}

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

  margin-bottom: 5vh;
`;

const BannerTitle = styled.h1`
  font-size: 3.5rem;
  --padding-x: 3vw;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
`;

const BannerSubtitle = styled.div`
  font-size: 1.3rem;
  color: #444545;

  --padding-x: 25vw;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
`;

const StartButton = styled.a`
  color: #fff;
  background: #2562ff;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  box-shadow: rgb(0 118 255 / 39%) 0px 2px 6px 0px;
  border-radius: 23rem;

  padding: 2vh 4vw;
  margin-top: 3vh;

  --margin-x: 31vw;
  margin-left: var(--margin-x);
  margin-right: var(--margin-x);

  transition-duration: 200ms;

  &:hover {
    transform: scale(1.2);
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
