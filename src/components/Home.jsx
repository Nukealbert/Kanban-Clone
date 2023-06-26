

import { Box, Button, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Select, SvgIcon, Typography,Avatar } from '@mui/material'
import React from 'react'
import Kanban from './Kanban';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import group from './assets/Group.png';
import ellipse from './assets/Ellipse.png';
import ellipse1 from './assets/Ellipse1.png'
function Home() {
  return (
    <Box style={{padding:50, paddingTop:70, }}>

        <Box style={{padding:10, display:'flex',justifyContent:'space-between'}}>
           
            <Box style={{display:'flex'}}>
                 <h1>Mobile App</h1>
               <Box style={{alignSelf:'center'}}>
               <IconButton style={{color:'#5030E5', marginLeft:10, backgroundColor:'#5030E533', borderRadius:8,height:25,width:25}}>
                    <CreateOutlinedIcon fontSize='small'  />
                </IconButton>
                <IconButton style={{color:'#5030E5', marginLeft:10, backgroundColor:'#5030E533', borderRadius:8,height:25,width:25}}>
                    <InsertLinkOutlinedIcon fontSize='small' />
                </IconButton>
               </Box>
            </Box>
            <Box style={{display:'flex',alignItems:'center'}}>
                    <Avatar sx={{height:30, width:30, }} src={ellipse} />
                    <Avatar sx={{height:30, width:30,marginLeft:-1.5 ,zIndex:2}} src={ellipse1} />
                    <Avatar sx={{height:30, width:30,marginLeft:-1.5 ,zIndex:2}} src={ellipse} />
                    <Avatar sx={{height:30, width:30,marginLeft:-1.5 ,zIndex:2,bgcolor:'#F4D7DA',color:'#D25B68',fontSize:15}}  >+2</Avatar>
            </Box>
        </Box>
        <Box style={{display:'flex', justifyContent:'space-between'}}>
            <Box>
                <FormControl sx={{ m: 1, minWidth: 120, height:'2rem' }}>
                    <InputLabel id="demo" style={{ display: 'flex', alignItems: 'center' }}><FilterAltOutlinedIcon fontSize='small' /><Typography>Filter</Typography></InputLabel>
                    <Select
                        labelId="demo"
                        label='Ages'
                        sx={{height:'3rem'}}
                        

                    >

                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120, height:'3rem' }}>
                    <InputLabel id="demo" style={{ display: 'flex', alignItems: 'center' }}><EventOutlinedIcon fontSize='small' /><Typography>Today</Typography></InputLabel>
                    <Select
                   
                        labelId='demo1'
                        label='agess'
                        sx={{height:'3rem'}}

                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box style={{display:'flex',marginRight:30,marginTop:8}}>
                <Button  style={{color:'#787486', borderColor:'#787486',height:'2.5rem'}} startIcon={<GroupOutlinedIcon />} variant="outlined">Share</Button>
                <HorizontalRuleOutlinedIcon style={{transform:'rotate(90deg)', fontSize:40, color:'#787486', marginTop:8}}/>
                <Box sx={{height:'2rem',width:'2rem',backgroundColor:'#5030E5',borderRadius:1,paddingTop:0.5,paddingLeft:0.5,color:'white',marginTop:1.5}}>
                    <ViewStreamIcon/>
                </Box>
                <Box style={{display:'flex',alignItems:'center',padding:10}}>
                    <img  height={20} width={20} src={group} />
                </Box>

            </Box>
        </Box>
       <Box style={{display:'flex', flexWrap:'wrap'}}>
            <Kanban />
       </Box>
       
    </Box>
  )
}

export default Home