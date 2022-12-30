import React from "react";
import BlogPostListItem from "./blogPostListItem";

export default function BlogPostList({ blogPosts }) {
  return (
    <div>
      {blogPosts.map((post, i) => (
        <BlogPostListItem {...post} key={i} />
      ))}
      
    </div>
  );
}
