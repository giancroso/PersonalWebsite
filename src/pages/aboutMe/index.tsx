import * as React from "react";
import Box from "@mui/material/Box";

import { useTitle } from "../../context/TitleProvider";
import AboutMe from "./aboutMe.mdx";

const AboutMePage: React.FC = () => {
  const { setTitle } = useTitle();
  React.useEffect(() => setTitle("About Me"), [setTitle]);
  return (
    <Box sx={{ my: 4 }}>
      <AboutMe />
    </Box>
  );
};

export default AboutMePage;
