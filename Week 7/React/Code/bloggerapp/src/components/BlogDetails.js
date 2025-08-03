import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: "Getting Started with React", author: "Alice" },
    { id: 2, title: "Mastering Hooks", author: "Bob" },
    { id: 3, title: "Conditional Rendering Tips", author: "Charlie" },
  ];

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>Blog Details</h3>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;