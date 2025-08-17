import React from "react";

const ProductsPage = ({ params }) => {
  const { slug = [] } = params; // Default to empty array for root path

  return (
    <div>
      <h1>Products Page</h1>
      {slug.length === 0 ? (
        <p>This is the main products page</p>
      ) : (
        <>
          <p>Current Path Segments: {slug.join(" / ")}</p>
          <ul>
            <li>You are viewing: /products/{slug.join("/")}</li>
            <li>Path segments: {JSON.stringify(slug)}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default ProductsPage;
