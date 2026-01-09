// src/components/PostForm.jsx
import { Box, TextField, Button, useTheme } from "@mui/material";
import { useState, useEffect } from "react";

const PostForm = ({ onSubmit, editPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const theme = useTheme(); // use current theme for colors

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setBody(editPost.body);
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body, id: editPost?.id });
    setTitle("");
    setBody("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mb: 3,
        p: 2,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
      }}
    >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
        required
      />
      <TextField
        label="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
        required
      />
      <Button type="submit" variant="contained">
        {editPost ? "Update Post" : "Create Post"}
      </Button>
    </Box>
  );
};

export default PostForm;
