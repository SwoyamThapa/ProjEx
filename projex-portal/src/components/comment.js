import React, { useState } from 'react';
import axios from 'axios';

const CommentSection = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    try {
      await axios.post('http://localhost:5000/api/comments', { name, comment });
      setName('');
      setComment('');
      alert('Comment submitted!');
    } catch (error) {
      console.error('Failed to submit comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentSection;
