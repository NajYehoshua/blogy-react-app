import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      const res = await fetch(`http://localhost:3000/blogs/${id}`);

      const data = await res.json();

      setBlog(data);
    };

    getBlog();
  }, []);

  return (
    <>
      <section className="blog-page">
        <div className="container">
          {!blog ? (
            "Loading"
          ) : (
            <div className="blog-page_card">
              <h2 className="blog-page_title">{blog.title}</h2>

              <p className="blog-page_subheading">{blog.subheading}</p>

              <p className="blog-page_body">{blog.body}</p>

              <Link className="link-btn blog-card_link" to="/blogs">
                Back to Feed
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
