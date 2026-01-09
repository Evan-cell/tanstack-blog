
import { Box, Typography } from "@mui/material";

const Home = () => (
  <Box sx={{ m: 5 }}>
    <Typography variant="h3">Welcome to Simple Blog</Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      Login to create, edit, and delete posts. Admins can manage all posts.
    </Typography>
  </Box>
);

export default Home;
