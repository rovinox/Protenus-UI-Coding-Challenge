import React, { Component } from 'react';
import Card from "@material-ui/core/Card"
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {ToastContainer} from 'react-toastify';
const useStyles = {
    card: {
      maxWidth: 345,
      margin:"10px"
    },
   noMovie: {
    textAlign:"center",
     marginTop:"400px, auto"


    }
  };

  

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
 
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  
  background: isDragging ? 'lightgreen' : 'grey',

  
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'none' : 'none',
  display: 'flex',
  padding: grid,
  overflow: 'auto',
});


class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: this.props.myList,
      }
    
    this.onDragEnd = this.onDragEnd.bind(this);
  }
 
  onDragEnd(result) {
    
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );
     
    this.setState({
      items,
    });
  }

  removeFromList = (index) =>{
    let newList = this.state.items.slice();
    newList.splice(index, 1);
    this.setState({
      items: newList
    });
  }
  
 
  render() {
      
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div 
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {!this.state.items[0] ? 
              <Typography variant="h3"> You Have No Movies On Your List </Typography> : 
              this.state.items.map((item, index) => (
                <Draggable key={item.index} draggableId={item.movie_id} index={index}>
                  {(provided, snapshot) => (
                    <div 
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                        <Card style={useStyles.card}>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {item.title.toUpperCase()}
                            </Typography>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="400"
                                width="200"
                                image={item.image}
                                title="Contemplative Reptile"
                                />
                            </CardContent>
                            <CardActions>
                               <Button onClick={()=>{this.removeFromList(index)}} size="small" color="primary">
                                remove
                               </Button>
                               <ToastContainer/>
                            </CardActions>
                        </Card>
                      
                    </div>
                  )}
                </Draggable>
              ))}
              
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
export default MyList