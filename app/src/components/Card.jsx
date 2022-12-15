import { Box } from "@mui/material";
import React from "react";
import Alerts from './Alert';
import Chart from './Chart';
import DataTable from './DataTable';
export default function Card (){
  return (
    <Box flex={4} p={2}>
<Alerts alertType='warning'/>
<Chart/>
    <DataTable/>
    </Box>
  );
};
