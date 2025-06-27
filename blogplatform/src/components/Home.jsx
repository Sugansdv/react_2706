
import React, { useEffect, useState } from 'react';
import mockPosts from '../data/mockPosts';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("userPosts")) || [];
    setPosts([...mockPosts, ...storedPosts]);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📚 Blog Posts</h2>
      {posts.map((post, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
