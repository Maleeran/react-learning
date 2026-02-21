import { useState } from "react";
import { useEffect } from "react";

const FetchEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();

      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>First Post Title:</h1>
      {posts.length > 0 ? <h2>{posts[0].title}</h2> : <h2>Loading...</h2>}
    </div>
  );
};
export default FetchEffect;
