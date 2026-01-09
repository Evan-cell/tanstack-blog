import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => setPosts(res.data));
  }, []);

  const requireAuth = (action) => {
    if (!user) return navigate("/login");
    action();
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
      <Typography variant="h3" textAlign="center" fontWeight={700} mb={4}>
        Simple Blog
      </Typography>

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
            onEdit={() => navigate("/dashboard")}
            onDelete={() =>
              setPosts((prev) => prev.filter((p) => p.id !== post.id))
            }
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
