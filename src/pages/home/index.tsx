import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTitle } from "../../context/TitleProvider";

function HomePage() {
  const { setTitle } = useTitle();
  setTitle("Home");
  return (
    <Box sx={{ my: 4 }}>
      <Typography align="center" variant="h4" component="h1" sx={{ mb: 2 }}>
        Gianluca Croso's Personal Website
      </Typography>
    </Box>
  );
}

export default HomePage;
