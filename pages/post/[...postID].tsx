import { useRouter } from "next/router";
import { useEffect } from "react";

const Post = () => {
  const { query, isReady,asPath  } = useRouter();
  console.log('query',query);
  // console.log("isReady", isReady);
  // console.log("asPath", asPath);
  const { postID } = query;
  useEffect(() => {
    if (!isReady) return;
    console.log(postID);
  }, [isReady]);

  return <p>Post id: {postID}</p>;
};

export default Post;
