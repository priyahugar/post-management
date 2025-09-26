import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './pages/postlist';
import PostCreate from './pages/postcreate';
import PostEdit from './pages/postedit';
import PostView from './pages/postview';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/new" element={<PostCreate />} />
        <Route path="/posts/:id" element={<PostView />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />
      </Routes>
    </Router>
  );
}