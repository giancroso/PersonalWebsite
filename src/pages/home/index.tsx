import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTitle } from "../../context/TitleProvider";

const HomePage: React.FC = () => {
  const { setTitle } = useTitle();
  React.useEffect(() => setTitle("Home"), [setTitle]);
  return (
    <Box sx={{ my: 4 }}>
      <Typography align="center" variant="h4" sx={{ mb: 2 }}>
        Gianluca Croso's Personal Website
      </Typography>
      <Typography align="center" variant="body1" sx={{ mb: 2 }}>
        Experimentation, coding playground, hosting for personal projects, etc.
      </Typography>
    </Box>
  );
};

export default HomePage;
