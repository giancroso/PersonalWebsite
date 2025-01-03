import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTitle } from "../../context/TitleProvider";
import Map from "./components/Map";

const TravelBlogPage: React.FC = () => {
  const { setTitle } = useTitle();
  React.useEffect(() => setTitle("Blog"), [setTitle]);
  return (
    <Box sx={{ my: 4 }}>
      <Typography align="center" variant="h4" sx={{ mb: 2 }}>
        Gianluca's Travel Blog
      </Typography>
      <Map />
    </Box>
  );
};

export default TravelBlogPage;
