import React from "react";
import { Link } from "react-router-dom";

function Feed({ image, id }) {
  return (
    <>
      <Link to={`/postsData/${id}`}>
        <img src={image} alt="" className="h-[260px] w-[260px] object-cover" />
      </Link>
    </>
  );
}

export default Feed;
