import Link from "next/link";
import { blogs } from "./data";

const Blogs = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Blog Posts</h1>
      <div className="grid gap-6">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.id}`}
            key={blog.id}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {blog.excerpt}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {blog.date}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
