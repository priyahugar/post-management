 import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f2f2f2' }}>
      <h1>Mane Uta - Post Management</h1>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Posts</Link>
        <Link to="/posts/new">Create Post</Link>
      </nav>
    </header>
  );
}