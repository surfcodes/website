import Head from "next/head";
import styled from "@emotion/styled";
import Wrapper from "components/layout/LayoutWrapper";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>surf.codes - Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Docs</h1>
    </Wrapper>
  );
}