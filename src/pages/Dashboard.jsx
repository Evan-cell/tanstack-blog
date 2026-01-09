// src/pages/Dashboard.jsx
import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from "@mui/material";
import axios from "axios";
import PostForm from "../components/PostForm";

const Dashboard = () => {
  const [posts, setPosts] = React.useState([]);
  const [editPost, setEditPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => setPosts(res.data))
      .catch(console.error);
  }, []);

  const handleCreateUpdate = (post) => {
    if (post.id) {
      setPosts((prev) =>
        prev.map((p) => (p.id === post.id ? post : p))
      );
    } else {
      const newPost = {
        ...post,
        id: Date.now(),
        userId: 1,
      };
      setPosts((prev) => [newPost, ...prev]);
    }
    setEditPost(null);
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Box sx={{ minHeight: "100vh", px: { xs: 2, md: 6 }, py: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Dashboard
      </Typography>

      {/* Create / Edit Form */}
      <PostForm onSubmit={handleCreateUpdate} editPost={editPost} />

      {/* Blog Grid (same as Home) */}
      <Box
        sx={{
          mt: 4,
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
          gap: 3,
        }}
      >
        {posts.map((post) => (
          <Card key={post.id} sx={{ height: "100%" }}>
            <CardActionArea
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>

              {/* Actions */}
              <Box
                sx={{
                  p: 2,
                  pt: 0,
                  display: "flex",
                  gap: 1,
                }}
              >
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => setEditPost(post)}
                >
                  Edit
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
