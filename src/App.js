import React, { Component } from 'react'
import Header from "./components/Header"
import Movies from "./components/Movies"
import MyList from "./components/MyList"
import axios from "axios"

export default class App extends Component {
   constructor(props){
     super(props)
     this.state ={
       movies:[],
       myList:[],
       page:"movies"
     }
   }

   componentDidMount(){
     axios.get("/movie/api").then(Response =>{
       console.log(Response);
       this.setState({
         movies: Response.data
       })
     })
   }

    listTab= () => {
    this.setState({
      page: "list"
    })

  }
  movieTab =() =>{
    this.setState({
      page:"movies"
    })
  }
  
  addToList = (movie) =>{
    this.setState({

   myList:[...this.state.myList, movie]})
  }
    

  render() {
    console.log(this.state.myList);
    return (
      <div>
        <Header listTab={this.listTab} movieTab={this.movieTab}  />
        {this.state.page === "movies" ? 
          <Movies movies={this.state.movies} addToList={this.addToList} /> : 
          <MyList myList={this.state.myList} />}
      </div>
    )
  }
}
