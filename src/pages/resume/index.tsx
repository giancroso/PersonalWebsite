import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTitle } from "../../context/TitleProvider";

const ResumePage: React.FC = () => {
  const { setTitle } = useTitle();
  setTitle("Resume");
  return (
    <Box sx={{ my: 4 }}>
      <Typography align="center" variant="h4" component="h1" sx={{ mb: 2 }}>
        About Me
      </Typography>
    </Box>
  );
};

export default ResumePage;
