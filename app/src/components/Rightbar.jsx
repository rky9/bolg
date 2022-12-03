import { Box, Typography } from "@mui/material";
import React from "react";
import Latestphotos from "./Latestphotos";
import Onlineuser from "./Onlineuser";
import LatestConversation from "./LatestConversation";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300} mt={2}>
        <Typography variant="h6" fontWeight={100}>
          Online
        </Typography>
        <Onlineuser />
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <Latestphotos />
        <Typography variant="h6" fontWeight={100}>
          Latest Concersations
        </Typography>
        <LatestConversation />
      </Box>
    </Box>
  );
};
