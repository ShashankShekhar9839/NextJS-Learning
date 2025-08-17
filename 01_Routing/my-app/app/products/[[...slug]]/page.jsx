import React from 'react';

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const { slug = [] } = params;
  
  const title = slug.length === 0 
    ? 'All Products' 
    : `${slug.join(' > ')} - Products`;
    
  const description = slug.length === 0
    ? 'Browse all our products'
    : `Browse our ${slug.join('/')} products`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    // You can also add product-specific structured data
    alternates: {
      canonical: `/products/${slug.join('/')}`,
    },
  }
}

const ProductsPage = ({ params }) => {
  const { slug = [] } = params; // Default to empty array for root pathrt React from "react";

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
