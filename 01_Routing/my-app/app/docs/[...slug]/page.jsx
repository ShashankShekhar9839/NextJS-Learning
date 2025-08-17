import React from "react";

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const { slug } = params;

  return {
    title: `${slug.join(" > ")} - Documentation`,
    description: `Documentation page for ${slug.join("/")}`,
    openGraph: {
      title: `${slug.join(" > ")} - Documentation`,
      description: `Learn more about ${slug.join("/")}`,
    },
  };
}

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
