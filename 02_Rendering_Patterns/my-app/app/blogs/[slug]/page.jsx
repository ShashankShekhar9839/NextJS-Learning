import { blogs } from "../data";
import { notFound } from "next/navigation";

// Force dynamic rendering
// export const dynamic = "force-dynamic";

// Add generateStaticParams to pre-render all blog pages
export async function generateStaticParams() {
  // Return an array of objects with slug params
  return blogs.map((blog) => ({
    slug: blog.id,
  }));
}

const BlogPost = ({ params }) => {
  //   we get part of the url in params as slug in next js

  const blog = blogs.find((blog) => blog.id === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{blog.date}</p>
      <p className="text-gray-700 dark:text-gray-300">{blog.excerpt}</p>
    </article>
  );
};

export default BlogPost;
