import React, { useState } from 'react';
import './CommentSection.css';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { name: 'Alex Johnson', text: 'Great work! Excited to see the final version.' },
    { name: 'Dr. Rivera', text: 'This concept has a lot of potential.' },
    { name: 'Casey M.', text: 'Looking forward to how you\'ll integrate the feedback feature.' },
  ]);

  const fakeNames = ['Jordan Smith', 'Taylor R.', 'Morgan Lee', 'Jamie Chen', 'Prof. Allen'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
      setComments([...comments, { name: randomName, text: comment }]);
      setComment('');
    }
  };

  return (
    <div className="comment-section">
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your thoughts here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Post Comment</button>
      </form>

      <div className="comment-list">
        {comments.map((c, i) => (
          <div className="comment" key={i}>
            <strong className="comment-name">{c.name}</strong>
            <p className="comment-text">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
