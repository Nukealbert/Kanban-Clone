

import { Box } from '@mui/material'
import React from 'react'
import Kanban from './Kanban'

function Home() {
  return (
    <Box style={{padding:50, paddingTop:70, display:'flex', flexWrap:'wrap'}}>

        <Box>
            <h1>Hello</h1>
        </Box>
       <Box >
            <Kanban />
       </Box>
       
    </Box>
  )
}

export default Home