import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const BlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);

  // !run side effect
  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch(`http://localhost:3000/blogs`);

      const data = await res.json();

      setBlogs(data);
    };

    getBlogs();
  }, []);

  return (
    <>
      <main className="main">
        <div className="container">
          {!blogs.length && <p>"Loading"</p>}
          {blogs.length &&
            blogs.map((blog) => (
              <BlogCard
                title={blog.title}
                subheading={blog.subheading}
                id={blog.id}
                key={blog.id}
              />
            ))}

          <Link className="link-btn" to="/">
            Go to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default BlogsContainer;
