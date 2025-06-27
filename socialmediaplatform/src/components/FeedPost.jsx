import React, { useState } from 'react';

const FeedPost = ({ index, username, content, comments, likes, onLike, onComment }) => {
  const [commentInput, setCommentInput] = useState('');

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">@{username}</h5>
        <p className="card-text">{content}</p>
        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onLike(index)}>
          👍 Like ({likes})
        </button>
        <div className="mt-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => {
              onComment(index, commentInput);
              setCommentInput('');
            }}
          >
            💬 Comment
          </button>
        </div>
        <div className="mt-3">
          {comments.map((c, i) => (
            <p key={i}><strong>@{c.user}:</strong> {c.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
