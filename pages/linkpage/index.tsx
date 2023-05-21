import Link from "next/link";

function LinkPage() {
  const posts = [{ id: "1" }, { id: "2" }, { id: "3" }];
  return (
    <ul>
      <li>
        <Link href="/fetchcsr" legacyBehavior>
          <a>fetch CSR</a>
        </Link>
      </li>
      <li>
        <Link href="/fetchssr" legacyBehavior>
          <a>fetch SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/fetchssg">fetch SSG</Link>
      </li>
      <li>
        <Link href={{ pathname: "/post/[postID]", query: { postID: "qwe" } }}>
          dynamic routes
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/post/[...postID]",
            query: { postID: [2022, 8, 4] },
          }}
        >
          catch all routes
        </Link>
      </li>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>Post id :{post.id}</Link>
        </li>
      ))}
    </ul>
  );
}

export default LinkPage;
