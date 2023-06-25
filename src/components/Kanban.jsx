import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Grid, Box,  Chip } from "@mui/material";
import Divider from "@mui/material/Divider";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { columnsFromBackend } from "./KanbanData";
import TaskCard from "./TaskCard";



const TaskList = styled("div")(() => ({
  minHeight: "100px",
  display: "flex",
  flexDirection: "column",
  background: "#F5F5F5",
  minWidth: "300px",
  borderRadius: "5px",
  padding: "15px 15px",
  marginRight: "18px",
}));

const TaskColumnStyles = styled("div")(() => ({
  margin: "8px",
  display: "flex",
  width: "100%",
  flexWrap:'wrap',
  minHeight: "80vh",
}));
const Title = styled("span")(() => ({
  fontWeight: "bold",
  color: "#333333",
  fontSize: 16,
  marginBottom: "1.5px",
}));


const Kanban = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <DragDropContext
      onDragEnd={(result) => {
        onDragEnd(result, columns, setColumns);
      }}
    >
      <Box style={{display:'flex', flexWrap:'wrap'}}>
        
        <TaskColumnStyles>
            
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={index} droppableId={columnId}>
                {(provided, snapshot ) => (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Box sx={{ width: "280px" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={10} key={index} style={{display:'flex', marginBottom:10}}>
                            <Brightness1Icon style={{fontSize:8, marginTop:8, marginRight:5,}} sx={{color:column.color}}  />
                          <Title>{column.title}</Title>
                          <Chip label={column.items.length} size="small" style={{marginLeft:5}} />
                         
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          key={index}
                          display="flex"
                          alignContent="flex-end"
                          justifyContent="flex-end"
                        > 
                          
                        </Grid>
                      </Grid>
                    </Box>
                    <Divider style={{backgroundColor:column.color, height:2}} />

                    {column.items.map((item, index) => (
                      <TaskCard key={index} item={item} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Box>
    </DragDropContext>
  );
};

export default Kanban;