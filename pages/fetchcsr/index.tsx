import { useState, useEffect } from "react";
import style from './fetchcsr.module.css'

// type Post ={
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  // const [post, setPost] = useState<Post>();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPost(res);
      });
  }, []);

  return (
    <div>
      <h2 className="middle">CSR</h2>
      <h1 className={style.bcg}>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
}
