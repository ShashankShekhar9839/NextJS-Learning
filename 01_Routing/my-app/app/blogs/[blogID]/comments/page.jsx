import React from "react";
import Link from "next/link";

const Comments = ({ params }) => {
  const { blogID } = params;

  return (
    <div>
      <h2>Comments for Blog {blogID}</h2>
      <Link href={`/blogs/${blogID}`}>Back to Blog</Link>
    </div>
  );
};

export default Comments;
