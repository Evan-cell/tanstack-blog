
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const handleCreateUpdate = (post) => {
    if (post.id) {
      // Update
      setPosts(posts.map((p) => (p.id === post.id ? post : p)));
    } else {
      // Create
      const newPost = { ...post, id: posts.length + 1, userId: 1 };
      setPosts([newPost, ...posts]);
    }
    setEditPost(null);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <Box sx={{ m: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard
      </Typography>
      <PostForm onSubmit={handleCreateUpdate} editPost={editPost} />
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onEdit={setEditPost}
          onDelete={handleDelete}
        />
      ))}
    </Box>
  );
};

export default Dashboard;
