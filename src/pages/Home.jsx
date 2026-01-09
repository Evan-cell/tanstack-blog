// src/pages/Home.jsx
import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => setPosts(res.data))
      .catch(console.error);
  }, []);

  const guardAction = (callback) => {
    if (!user) {
      navigate("/login");
      return;
    }
    callback();
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, md: 6 },
        py: 4,
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Your Daily Blog
        </Typography>
        <Typography color="text.secondary">
          Read blogs below. Login to edit or delete posts.
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Box
        sx={{
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
                  onClick={() =>
                    guardAction(() => navigate("/dashboard"))
                  }
                >
                  Edit
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() =>
                    guardAction(() => handleDelete(post.id))
                  }
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

export default Home;
