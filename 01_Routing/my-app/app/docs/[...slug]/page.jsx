import React from "react";

const DocsPage = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <h1>Documentation</h1>
      <p>Current Path Segments: {slug.join(" / ")}</p>
      <ul>
        <li>You are viewing: /docs/{slug.join("/")}</li>
        <li>Path segments: {JSON.stringify(slug)}</li>
      </ul>
    </div>
  );
};

export default DocsPage;
