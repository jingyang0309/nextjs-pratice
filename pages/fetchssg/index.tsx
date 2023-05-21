import {  GetStaticProps } from "next";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface HomeProps {
  post: Post;
}

export default function Home({ post }: HomeProps) {
  return (
    <div>
      <h2>SSG</h2>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};