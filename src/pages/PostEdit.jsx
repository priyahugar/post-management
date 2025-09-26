import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', author: '', content: '' });

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const existingPost = storedPosts.find(p => p.id === id);
    if (existingPost) setPost(existingPost);
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = storedPosts.map(p => p.id === id ? { ...post, updatedAt: new Date().toISOString() } : p);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} required />
        <br />
        <input type="text" value={post.author} onChange={e => setPost({ ...post, author: e.target.value })} required />
        <br />
        <textarea value={post.content} onChange={e => setPost({ ...post, content: e.target.value })} required />
        <br />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}