import logo from './logo.svg';
import React, { useState } from 'react';
import data from "./data/data";
import Show from "./Show";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(data.length);

  // console.log(count);
  const todayDate = new Date();
  todayDate.getDate();

  return (
        <Box
      sx={{
        width: 300,
        height: 300,
        textAlign: 'center'
        // backgroundColor: 'primary.dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <h2>{count} Birthdays Today</h2>
      {
        data.map((item) => {
          if(todayDate.getDate() === item.date){
            return <Show key={item.id} {...item} />;
          }
        })
      }
    </Box>
  );
}

export default App;