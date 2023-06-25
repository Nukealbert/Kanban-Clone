import * as React from "react";
import ellipse from './assets/Ellipse.png';
import ellipse1 from './assets/Ellipse1.png'
import {
  Box,
  Card,
  CardHeader,
  Grid,
  Chip,
  IconButton,
  Typography,
  CardContent,
  CardActions,
  Avatar,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from "@mui/system";

const rightIconAction =(item) =>{

    const priority = item.priority;
    if(priority==='Low'){
        return <Chip  style={{borderRadius:8, backgroundColor:'#DFA87433',color:'#D58D49',fontWeight:'600' }} label={item.priority} />;
    }
    else if(priority==='High'){
       return <Chip  style={{borderRadius:8, backgroundColor:'#D8727D1A',color:'#D8727D',fontWeight:'600' }} label={item.priority} />;
    }
    else if(priority==='Medium'){
        return <Chip  style={{borderRadius:8, backgroundColor:'#83C29D33',color:'#68B266',fontWeight:'600' }} label={item.priority} />;
    };

};

   // <Chip  style={{borderRadius:4 }} label={item.priority} />
 

const Heading = styled("div")(() => ({
  color: "#333333",
  fontWeight: "bold",
  fontSize: "16px",
}));



const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card sx={{ width: 280, m: "8px 1px" }}>
            
            <CardHeader 
            avatar={
                rightIconAction(item)
               
                
            }
            action={
                 <IconButton aria-label="settings">
                 <MoreHorizIcon />
               </IconButton>
            } />
            
            <CardContent sx={{ p: "0 16px" }}>
            
              <Heading>{item.ttl}</Heading>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {item.task}
              </Typography>
             
            </CardContent>
            <CardActions>
            <Box sx={{ flexGrow: 1, color: "#333333", m: "20px 0 0" }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={2} sm={4} md={4} key={index} style={{display:'flex'}}>
                    
                        <Avatar sx={{height:25, width:25, zIndex:2}} src={ellipse} />
                        <Avatar sx={{height:25, width:25,marginLeft:-1}} src={ellipse1} />
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    

                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    
                  </Grid>
                </Grid>
              </Box>
            </CardActions>
          </Card>
        </div>
      )}
    </Draggable>
  );
};
export default TaskCard;