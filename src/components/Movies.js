import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin:"10px"
  },
});

function searching(term) {
    return function (x) {
      return x.title.toLowerCase().includes(term.toLowerCase()) 
      
    }
    
  }


export default function Movies(props) {
  const [term, setTerm] = React.useState("");  
  const classes = useStyles();
  const displayMovies = props.movies.filter(searching(term)).map(movie =>{
     return (
        <Card  key={movie.movie_id} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="450"
          width="200"
          image={movie.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {movie.title.toUpperCase()}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>{props.addToList(movie)}} size="small" color="primary">
          Add To List
        </Button>
      </CardActions>
    </Card>
     )
 })
  return (
      <div>
           <TextField
        id="filled-full-width"
        label="Movie"
        style={{ margin: 20 }}
        placeholder="Search..."
        fullWidth
        margin="normal"
        variant="filled"
        value={term}
        onChange={(e) =>{setTerm(e.target.value)}}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
            {displayMovies}
        </div>
      </div>
  );
}