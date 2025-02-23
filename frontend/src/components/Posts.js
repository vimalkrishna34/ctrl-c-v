import React, { useState } from "react";
import "./Post.css";

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addComment = async () => {
    if (!commentText.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: commentText }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message);
        return;
      }

      setComments([...comments, commentText]);
      setCommentText("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error posting comment:", error);
      setErrorMessage("❌ Failed to post comment.");
    }
  };

  return (
    <div className="post">
      <h4>{post.username} 🟢</h4>
      <p>{post.text}</p>
      {post.image && <img src={post.image} alt="post" className="post-image" />}

      <div className="post-actions">
        <button onClick={() => setLikes(likes + 1)}>❤ {likes}</button>
        <button onClick={addComment}>💬 Comment</button>
      </div>

      <textarea
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="comments">
        {comments.map((comment, index) => (
          <p key={index} className="comment">💬 {comment}</p>
        ))}
      </div>
    </div>
  );
}