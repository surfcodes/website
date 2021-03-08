import Head from "next/head";

import Wrapper from "components/layout/LayoutWrapper";
import styled from "@emotion/styled";

function importAll(r) {
  return r.keys().map(r);
}

const blogItems = importAll(require.context("./blog", false, /.mdx$/));
console.log(blogItems);

function Blog() {
  return (
    <Wrapper>
      <Head>
        <title>surf.codes - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog</h1>
      <div>
        {blogItems.map((item) => (
          <Post>
            <PostTitle>
              <a href={item.meta.slug}>
                {item.meta.icon} {item.meta.title}
              </a>
            </PostTitle>
            <PostSubTitle>{item.meta.description}</PostSubTitle>
          </Post>
        ))}
      </div>
    </Wrapper>
  );
}

export default Blog;

const Post = styled.div`
  padding: 3vh 6vw;
  margin: 6vh 1vw;

  box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 10px;

  transition-duration: 200ms;

  &:hover {
    transform: scale(1.1);
    transition-duration: 200ms;
  }
`;
const PostTitle = styled.h1`
  font-size: 1.3rem;
`;

const PostSubTitle = styled.p`
  font-size: 1.1rem;

  color: #444545;
`;
