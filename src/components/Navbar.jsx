import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const blogs = React.lazy(() => import("./Blogs"));

  return (
    <>
      <nav style={{ textAlign: "center", margin: "30px 0" }}>
        <Link
          to="/"
          style={{ padding: "0 10px",  color: "white" }}
        >
          Home
        </Link>
        <Link to="/blogs" style={{ textDecoration: "none", color: "white" }}>
          Blogs
        </Link>
      </nav>
    </>
  );
};
