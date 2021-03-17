import Head from "next/head";
import Link from "next/link";
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
      <br />
      <Content>
        <PreviewImage src="/images/preview/surf-ui.png" />
        <Description>
          <DescriptionTitle>
            Surf your codes, Faster then ever.
          </DescriptionTitle>
          <DescriptionContent>
            Surf for the rescue! On these occasions, you can run surf . -b
            other-branch on your local repository to start surfing on other
            branch than local's (on browser based vscode) (More details{" "}
            <u>
              <Link href="/blog/introduction">here</Link>
            </u>
            &nbsp;)
          </DescriptionContent>
        </Description>
        <PreviewImage src="/images/preview/extension-button.png" />
      </Content>
    </Wrapper>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh 4vw;

  overflow: none;
  max-width: 100vw;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center
  align-items: center;
  padding: 0.5rem;
  text-align: center;

  margin-bottom: 5vh;
`;

const BannerTitle = styled.h1`
  font-size: 3.5rem;
  font-family: Helvetica Neue;
  --padding-x: 3vw;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
`;

const BannerSubtitle = styled.div`
  font-size: 1.3rem;
  font-family: Helvetica Neue;
  color: #444545;

  --padding-x: 25vw;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 40vw;
  margin: 2vh 9vw;
`;

const DescriptionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: Helvetica Neue;
  --padding-x: 3vw;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
`;

const DescriptionContent = styled.div`
  font-size: 1.3rem;
  font-family: Helvetica Neue;
  color: #444545;

  --padding-x: 3vw;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
`;

const PreviewImage = styled.img`
  margin: 2vh 10vw;
  border-radius: 1rem;
`;

const StartButton = styled.a`
  font-size: 1.25rem;
  font-family: Helvetica Neue;
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

  --margin-x: auto;
  margin-left: var(--margin-x);
  margin-right: var(--margin-x);

  transition-duration: 200ms;

  &:hover {
    transform: scale(1.2);
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
