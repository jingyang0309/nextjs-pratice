import { useRouter } from "next/router";
import { useEffect } from "react";

const Post = () => {
  const { query, isReady } = useRouter();
  const { postID }: { postID?: string[] }  = query;

  return <p>Post id: {postID?.map((v) => v + ",")}</p>;
};

export default Post;
