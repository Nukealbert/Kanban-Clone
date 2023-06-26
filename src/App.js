import * as React from 'react';
import logo from '../src/components/assets/colorfilter.png'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { AccountCircle } from '@mui/icons-material';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import Home from './components/Home';
import {PiCirclesFourLight} from 'react-icons/pi';
import lamp from './components/assets/lamp.png'
import { Card, CardContent, Typography } from '@mui/material';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {TbMessageCircleQuestion} from 'react-icons/tb';
import {BsCalendarWeek} from 'react-icons/bs';
import mask from './components/assets/Mask.png';
import {AiOutlineDown} from 'react-icons/ai'


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap:'nowrap' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:'white', boxShadow:'none', borderBottom:'1px solid #DBDBDB'}} >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box style={{display:'flex', width:'100%'}}>
            <Box sx={{ display: 'flex', 
           
            borderRadius:2 , 
            paddingRight:23,
            backgroundColor:'#F5F5F5'}}
          
            >
            <IconButton type="button"  aria-label="search">
                <SearchIcon />
              </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for anything..."
                
              />
              
            </Box>

            <Box style={{color:'black', marginLeft:'auto'}}>
              <Box style={{display:'flex',paddingRight:20,}}>
               <Box style={{paddingRight:20,fontSize:25}}> <BsCalendarWeek /></Box>
               <Box style={{paddingRight:20,fontSize:25}}> <TbMessageCircleQuestion /></Box>
                <Box style={{paddingRight:60,fontSize:25}}><IoIosNotificationsOutline /></Box>
                <Box style={{paddingRight:20}}>
                  <Typography>Kundan</Typography>
                  <Typography>Kundan</Typography>
                </Box>
                <Box style={{display:'flex'}}>
                  <Box style={{paddingRight:10}}><img src={mask} /></Box>
                 <Box sx={{mt:1.5}}><AiOutlineDown/></Box>
                </Box>
              </Box>
              
            </Box>

           
          </Box>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{height:'64px'}}>
          <Box style={{minWidth:'80%', display:'flex'  }}>
            <img src={logo} height={23} width={23} alt='img' style={{marginTop:18, marginRight:6}} />
            <h3>Project M.</h3>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <KeyboardDoubleArrowLeftOutlinedIcon  />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box style={{paddingLeft:'1.5rem',paddingTop:'1.5rem'}}>
          <Box>
            <Button sx={{marginRight:'auto',color:'#787486'}} variant="text" startIcon={<PiCirclesFourLight />}>
              Home
            </Button>
          </Box>
          <Box>
            <Button sx={{marginRight:'auto',color:'#787486'}} variant="text" startIcon={<PiCirclesFourLight />}>
            Messages
            </Button>
          </Box>
          <Box>
            <Button sx={{marginRight:'auto',color:'#787486'}} variant="text" startIcon={<PiCirclesFourLight />}>
              Tasks
            </Button>
          </Box>
          <Box>
            <Button sx={{marginRight:'auto',color:'#787486'}} variant="text" startIcon={<PiCirclesFourLight />}>
               Members
            </Button>
          </Box>
          <Box>
            <Button sx={{marginRight:'auto',color:'#787486'}} variant="text" startIcon={<PiCirclesFourLight />}>
              Settings
            </Button>
          </Box>
         
        </Box>
        <Divider sx={{alignSelf:'center'}} width='90%' />
        
        <Box style={{marginTop:'auto'}}>
         <Box >
            <Box style={{height:80,width:80, backgroundColor:'#F5F5F5',borderRadius:'50%',marginBottom:-38,marginRight:'auto',marginLeft:'auto'}}>
                
              </Box>
         </Box>
          <Box style={{height:200,width:206, backgroundColor:'#F5F5F5',borderRadius:10,marginBottom:10,marginRight:'auto',marginLeft:'auto'}}>
            <Box style={{display:'flex',alignItem:'center'}}><img style={{marginTop:-15,marginLeft:'45%'}} src={lamp} />
            </Box>

            <Box style={{marginTop:10,marginLeft:'15%'}}>
               <Typography variant="h6" component="div">
                  Thoughts Time
               </Typography>
            </Box>
            <Box style={{marginTop:10,marginLeft:'15%'}}>
             <Typography> jhgwdygqfjhbfbwjwfbk</Typography>
              <Typography>wjfbkuxgzxgzg</Typography>
            </Box>
           
          </Box>
        </Box>
      </Drawer>
      
      <Home />
     
    </Box>
  );
}

