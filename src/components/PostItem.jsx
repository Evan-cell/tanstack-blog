
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const PostItem = ({ post, onEdit, onDelete }) => {
  const { user } = useAuth();

  const canEditDelete =
    user?.role === "admin" || user?.username === `user${post.userId}`;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {post.body}
        </Typography>
        {canEditDelete && (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button size="small" variant="outlined" onClick={() => onEdit(post)}>
              Edit
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="error"
              onClick={() => onDelete(post.id)}
            >
              Delete
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PostItem;
