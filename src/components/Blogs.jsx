import React from "react";

export const Blogs = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <h3 style={{ marginLeft: "35px" }}>Blogs</h3>
        <ul style={{ listStyleType: "none" }}>
          <li style={{ padding: "10px", cursor: "pointer" }}>Blog 1</li>
          <li style={{ padding: "10px", cursor: "pointer" }}>Blog 2</li>
          <li style={{ padding: "10px", cursor: "pointer" }}>Blog 3</li>
          <li style={{ padding: "10px", cursor: "pointer" }}>Blog 4</li>
          <li style={{ padding: "10px", cursor: "pointer" }}>Blog 5</li>
          <li style={{ padding: "10px", cursor: "pointer" }}>Blog 6</li>
        </ul>
      </div>
    </>
  );
};
