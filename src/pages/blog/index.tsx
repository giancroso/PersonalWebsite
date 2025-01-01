import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTitle } from "../../context/TitleProvider";

function BlogPage() {
  const { setTitle } = useTitle();
  setTitle("Blog");
  return (
    <Box sx={{ my: 4 }}>
      <Typography align="center" variant="h4" component="h1" sx={{ mb: 2 }}>
        Gianluca's Blog
      </Typography>
    </Box>
  );
}

export default BlogPage;
