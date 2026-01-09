// src/pages/Dashboard.jsx
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import BlogCard from "../components/BlogCard";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const { user } = useAuth();

  const requireAuth = (action) => {
    if (!user) return alert("Please login first!");
    action();
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => setPosts(res.data));
  }, []);

  const handleCreateUpdate = (post) => {
    if (post.id) {
      setPosts((prev) => prev.map((p) => (p.id === post.id ? post : p)));
    } else {
      setPosts((prev) => [{ ...post, id: Date.now(), userId: 1 }, ...prev]);
    }
    setEditPost(null);
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "background.default",
        px: { xs: 2, md: 6 },
        py: 4,
      }}
    >
      <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
        Dashboard
      </Typography>

      <PostForm onSubmit={handleCreateUpdate} editPost={editPost} />

      <Box sx={{ maxWidth: 1200, mx: "auto", mt: 4 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            gap: 3,
          }}
        >
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              requireAuth={requireAuth}
              onEdit={() => setEditPost(post)}
              onDelete={() => handleDelete(post.id)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
