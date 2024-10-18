import React from 'react'
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';

function page() {
  return (
    <div>
         <h1>Materail ui</h1>
         <Button variant="outlined">Hello world</Button>;
         <Avatar sx={{ bgcolor: blue[500] }}>N</Avatar>
    </div>
  )
}

export default page