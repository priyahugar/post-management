import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (!storedPosts) {
      localStorage.setItem('posts', JSON.stringify(initialPosts));
      setPosts(initialPosts);
    } else {
      setPosts(storedPosts);
    }
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };
  return (
    <div>
      <h2>Post List</h2>
      <Link to="/posts/new">Create New Post</Link>
      <br /><br />
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filteredPosts.map(post => (
        <div key={post.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>By {post.author} | {new Date(post.createdAt).toLocaleDateString()}</p>
          <p>{post.content.substring(0, 50)}...</p>
          <Link to={`/posts/${post.id}`}>View</Link> |{' '}
          <Link to={`/posts/${post.id}/edit`}>Edit</Link> |{' '}
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}