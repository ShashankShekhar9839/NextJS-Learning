import React from "react";
import Link from "next/link";

const Comment = ({ params }) => {
  const { blogID, commentID } = params;

  return (
    <div>
      <h2>
        Comment {commentID} on Blog {blogID}
      </h2>
      <Link href={`/blogs/${blogID}/comments`}>Back to Comments</Link>
    </div>
  );
};

export default Comment;
