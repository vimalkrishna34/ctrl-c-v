const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

// Define Post Schema
const PostSchema = new mongoose.Schema({
  username: String,
  text: String,
  image: String,
  likes: Number,
  comments: [String],
});

const Post = mongoose.model("Post", PostSchema);

// Routes
app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const { username, text, image } = req.body;
  const newPost = new Post({ username, text, image, likes: 0, comments: [] });
  await newPost.save();
  res.json(newPost);
});

app.post("/posts/:id/comment", async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const bullyingWords = ["stupid", "idiot", "dumb", "loser"];
  if (bullyingWords.some((word) => comment.toLowerCase().includes(word))) {
    return res.status(400).json({ error: "Your comment contains inappropriate words." });
  }

  const post = await Post.findById(id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  post.comments.push(comment);
  await post.save();
  res.json(post);
});

app.post("/posts/:id/like", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  post.likes += 1;
  await post.save();
  res.json(post);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
