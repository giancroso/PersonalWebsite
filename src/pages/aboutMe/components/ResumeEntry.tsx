import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface ResumeEntryProps {
  name: string;
  location?: string;
  timeframe?: string;
}

export const ResumeEntry: React.FC<ResumeEntryProps> = (
  props: ResumeEntryProps
) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6">{props.name}</Typography>
      <Box sx={{ width: 140 }}>
        {props.location && <Typography>{props.location}</Typography>}
        {props.timeframe && (
          <Typography variant="body2">{props.timeframe}</Typography>
        )}
      </Box>
    </Box>
  );
};
