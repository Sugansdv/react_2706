import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };

    const existing = JSON.parse(localStorage.getItem("userPosts")) || [];
    localStorage.setItem("userPosts", JSON.stringify([...existing, newPost]));

    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea 
            className="form-control" 
            rows="5" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </div>
        <button className="btn btn-primary" type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
