import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="main-title">Blogy.net</h1>

          <p className="main-subheading">
            Write and share your thoughts to the world!
          </p>

          <Link className="link-btn" to="/blogs">
            Read Now
          </Link>
        </div>
      </header>
    </>
  );
};

export default Home;
