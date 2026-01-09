import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Box,
    IconButton,
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
  } from "@mui/material";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import BookmarkIcon from "@mui/icons-material/Bookmark";
  import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
  import { useState } from "react";
  
  const tags = ["Tech", "AI", "Web", "Startup"];
  
  const BlogCard = ({ post, onEdit, onDelete, requireAuth }) => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "0.3s",
            "&:hover": { transform: "translateY(-6px)" },
          }}
        >
          {/* Placeholder Image */}
          <CardMedia
            component="img"
            height="160"
            image={`https://picsum.photos/400/200?random=${post.id}`}
            alt="Blog"
          />
  
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography fontWeight={600} gutterBottom>
              {post.title}
            </Typography>
  
            <Typography variant="body2" color="text.secondary">
              {post.body.slice(0, 100)}...
            </Typography>
  
            <Box mt={2} sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {tags.slice(0, 2).map((tag) => (
                <Chip key={tag} label={tag} size="small" />
              ))}
            </Box>
          </CardContent>
  
          <Box sx={{ px: 2, pb: 1, display: "flex", alignItems: "center" }}>
            <IconButton onClick={() => setLiked(!liked)}>
              {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            </IconButton>
  
            <IconButton onClick={() => setSaved(!saved)}>
              {saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
  
            <Box sx={{ ml: "auto" }}>
              <Button size="small" onClick={() => requireAuth(onEdit)}>
                Edit
              </Button>
              <Button
                size="small"
                color="error"
                onClick={() => requireAuth(() => setOpen(true))}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Card>
  
        {/* Delete Confirmation */}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Delete this post?</DialogTitle>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              color="error"
              onClick={() => {
                onDelete();
                setOpen(false);
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default BlogCard;
  