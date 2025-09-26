import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const existingPost = storedPosts.find(p => p.id === id);
    if (existingPost) setPost(existingPost);
  }, [id]);

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>By {post.author} | {new Date(post.createdAt).toLocaleDateString()}</p>
      <p>{post.content}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}