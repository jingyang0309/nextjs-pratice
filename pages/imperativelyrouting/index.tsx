import Link from "next/link";
import { useRouter } from "next/router";

function LinkPage() {
  const posts = [{ id: "1" }, { id: "2" }, { id: "3" }];
  const router = useRouter();
  const handleRouteChange = (post_rul: string) => {
    console.log("router", router);
    router.push(`post/${post_rul}`);
    setTimeout(() => {
      router.back()
    }, 1000);
  };
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <button
            onClick={() => {
              handleRouteChange(post.id);
            }}
          >
            Post id :{post.id}
            
          </button>
        </li>
      ))}
    </ul>
  );
}

export default LinkPage;
