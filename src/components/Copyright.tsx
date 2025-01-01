import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright: React.FC = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.linkedin.com/in/gianlucacroso">
        Gianluca Croso
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Copyright;
