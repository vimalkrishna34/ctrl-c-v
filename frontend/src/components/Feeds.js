import React, { useState } from "react";
import "./Feeds.css";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

export default function Feed() {
  const [posts, setPosts] = useState([
    {
      username: "Darling Raisar",
      text: "Enjoying the beautiful day! ☀",
      image: "https://i.pinimg.com/736x/3f/70/d1/3f70d117e1feaffca48c78a188335cbd.jpg",
      likes: 120,
      comments: [],
      error: "",
      isLiked: false,
    },
  ]);

  const [commentText, setCommentText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(null);

  const bullyingWords = [
    "stupid", "idiot", "dumb", "loser", "fuck", "ass", "gay", "lesbian", "kill", "fat", "sexy", "racism"
  ];

  const addComment = (index) => {
    if (!commentText.trim()) return;

    // Check for bullying words
    const containsBullyingWords = bullyingWords.some((word) =>
      commentText.toLowerCase().includes(word)
    );

    setPosts((prevPosts) =>
      prevPosts.map((post, i) => {
        if (i === index) {
          if (containsBullyingWords) {
            return { ...post, error: "Your comment contains inappropriate words." };
          } else {
            return {
              ...post,
              comments: [...post.comments, commentText], // Add comment only if it's valid
              error: "",
            };
          }
        }
        return post;
      })
    );

    // Clear input only if the comment was valid
    if (!containsBullyingWords) {
      setCommentText("");
      setShowEmojiPicker(null);
    }
  };

  const toggleLike = (index) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[index].isLiked = !updatedPosts[index].isLiked;
      updatedPosts[index].likes += updatedPosts[index].isLiked ? 1 : -1;
      return updatedPosts;
    });
  };

  const handleEmojiSelect = (emoji) => {
    setCommentText((prev) => prev + emoji.native);
  };

  return (
    <div className="feed-container">
      {posts.map((post, index) => (
        <div key={index} className="post-card">
          <div className="post-header">
            <img
              className="user-avatar"
              src="https://i.pinimg.com/474x/7e/6f/9c/7e6f9ca01ecc86d1706221e42fdfd791.jpg"
              alt={post.username}
            />
            <span className="username">{post.username}</span>
          </div>
          <p className="post-text">{post.text}</p>
          <img className="post-image" src={post.image} alt="Post content" />
          <div className="post-actions">
            <button onClick={() => toggleLike(index)} className="like-button">
              {post.isLiked ? "❤️" : "🤍"} {post.likes} Likes
            </button>
          </div>
          <div className="comments-section">
            <h4>Comments</h4>
            {post.comments.length > 0 ? (
              post.comments.map((comment, i) => (
                <p key={i} className="comment">{comment}</p>
              ))
            ) : (
              <p className="no-comments">No comments yet. Be the first to comment!</p>
            )}
            <div className="comment-input">
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button
                type="button"
                className="emoji-button"
                onClick={() => setShowEmojiPicker(showEmojiPicker === index ? null : index)}
              >
                😊
              </button>
              <button onClick={() => addComment(index)} className="post-button">
                Post
              </button>
            </div>
            {showEmojiPicker === index && (
              <div className="emoji-picker">
                <Picker data={data} onEmojiSelect={handleEmojiSelect} />
              </div>
            )}
            {post.error && <p className="error-message">{post.error}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
