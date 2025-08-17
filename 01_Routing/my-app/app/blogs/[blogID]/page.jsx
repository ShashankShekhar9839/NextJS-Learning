import React from "react";

const page = ({ params }) => {
  const { blogID } = params;

  return <div>Blog {blogID}</div>;
};

export default page;
