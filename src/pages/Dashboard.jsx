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
      .then((res) => setPosts(res.data));
  }, []);

  const handleCreateUpdate = (post) => {
    if (post.id) {
      setPosts((prev) =>
        prev.map((p) => (p.id === post.id ? post : p))
      );
    } else {
      setPosts((prev) => [
        { ...post, id: Date.now(), userId: 1 },
        ...prev,
      ]);
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
        background: "linear-gradient(180deg, #f9fafb, #ffffff)",
        px: { xs: 2, md: 6 },
        py: 4,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        gutterBottom
      >
        Dashboard
      </Typography>

      <PostForm onSubmit={handleCreateUpdate} editPost={editPost} />

      <Box sx={{ maxWidth: 1200, mx: "auto", mt: 4 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
            gap: 3,
          }}
        >
          {posts.map((post) => (
            <Card
              key={post.id}
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardActionArea
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                  >
                    {post.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {post.body}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    p: 2,
                    pt: 0,
                    display: "flex",
                    justifyContent: "flex-end",
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
    </Box>
  );
};

export default Dashboard;
