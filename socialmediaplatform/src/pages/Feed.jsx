import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockUsers } from '../data/mockUsers';
import FeedPost from '../components/FeedPost';

const Feed = () => {
  const { user } = useAuth();
  const allPosts = mockUsers.flatMap(u => u.posts.map(p => ({ username: u.username, content: p, comments: [], likes: 0 })));
  const [posts, setPosts] = useState(allPosts);

  const handleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  const handleComment = (index, comment) => {
    if (!comment) return;
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push({ user: user.username, text: comment });
    setPosts(updatedPosts);
  };

  return (
    <div className="container mt-4">
      <h3>📰 Feed</h3>
      {posts.map((post, idx) => (
        <FeedPost
          key={idx}
          index={idx}
          {...post}
          onLike={handleLike}
          onComment={handleComment}
        />
      ))}
    </div>
  );
};

export default Feed;