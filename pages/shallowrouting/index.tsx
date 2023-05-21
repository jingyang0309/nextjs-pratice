import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function LinkPage() {
  // const posts = [{ id: "1" }, { id: "2" }, { id: "3" }];
  const router = useRouter();
  const [counters, setCounters] = useState<number[]>([]);

  const handleClick = () => {
    const counter = Math.round(Math.random() * 100);
    router.push(`?counter=${counter}`, undefined, {
      shallow: true,
    });
  };
  useEffect(() => {
    if (router.query.counter) {
      console.log('giiiiii');
      
      setCounters((prev) => [
        ...prev,
        parseInt(router.query.counter as string),
      ]);
    }
  }, [router.query.counter]);

  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        add counter
      </button>
      <ul>
        {counters.map((counter) => (
          <li key={counter}>{counter}</li>
        ))}
      </ul>
    </>
  );
}

export default LinkPage;
