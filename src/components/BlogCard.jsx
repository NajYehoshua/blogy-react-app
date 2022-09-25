import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

const BlogCard = ({ title, subheading, id }) => {
  const linkTo = `/blog/${id}`;

  return (
    <>
      <div className="blog-card">
        <div>
          <img
            className="img-avatar"
            src={faker.image.avatar()}
            alt="Failed to load image!"
          />
        </div>
        <div className="second-column">
          <p className="blog-title">{title}</p>
          <p className="blog-subheading">{subheading}</p>
          <Link to={linkTo}>Read</Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
