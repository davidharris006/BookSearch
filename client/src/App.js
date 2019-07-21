import React, { Component } from "react";
import logo from "./logo.svg";
import Topbar from "./components/Topbar"
import Bookcard from "./components/Bookcards"
import API from "./util/API"
import "./App.css";
import SavedBooks from "./components/Saved"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
state = {
  books: [],
  search: "",
  savedbooks: {}
};

searchBooks = query =>{
  API.search(query)
    .then(res => this.setState({
     ...this.state,
      books: res.data.items
    }))
    .catch(err => console.log(err));
}

getAllBooks = () => {
  API.getBook()
  .then(res=> this.setState({
    ...this.state,
    savedBooks: res.data
  }))
}

handleInputChange = event => {
  this.setState ({
    ...this.state,
    search: event.target.value
  })
}

handleClick= event => {
  event.preventDefault();
  this.searchBooks(this.state.search)
  
  console.log(this.state.books);

}

saveBookClick= event => {
  event.preventDefault()
  console.log(this.state.books);
  let savedBook = this.state.books.filter((book) => book.id === event.target.id)

 API.saveBook({ 
  title: savedBook[0].volumeInfo.title,
  author: savedBook[0].volumeInfo.authors.join(', '),
  description: savedBook[0].volumeInfo.description,
  image: savedBook[0].volumeInfo.imageLinks.thumbnail,
  link: savedBook[0].volumeInfo.infoLink
})
}



  render() {
    return (
      <Router>

      <div className="App">
       
        <Topbar />
        
          
        
        <input type="text" onChange={this.handleInputChange} ></input>
        <button onClick={this.handleClick} >Submit</button>
       <a href="https://localhost3000/saved"> <button></button>
         </a> 
        

        {this.state.books.map((book) => {
          return <Bookcard title={book.volumeInfo.title} Author={book.volumeInfo.authors} img={book.volumeInfo.imageLinks.thumbnail} onClick={this.saveBookClick} id={book.id}/>
          })
        }
        <Route path="/saved" component={SavedBooks} />
      </div>
        </Router>
        
    );
  }
}

export default App;
