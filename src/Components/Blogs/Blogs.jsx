import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <header className="md:w-2/3">
      <h2 className="text-4xl">Blogs</h2>
    </header>
  );
};

export default Blogs;
