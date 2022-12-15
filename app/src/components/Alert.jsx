import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function Alerts({alertType}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2} pb={2}>
      <Alert severity={alertType}>This is an error alert — check it out!</Alert>
  
    </Stack>
  );
}