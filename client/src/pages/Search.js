import React, { Component } from "react";
import Topbar from "../components/Topbar"
import Bookcard from "../components/Bookcards"
import API from "../util/API"


class Search extends Component {
    state = {
      books: [],
      search: "",
      savedbooks: []
    };
    
    getSavedBooks = () => {
      API.getBooks()
      .then(res => console.log(res)
      )
      .catch(err => console.log(err));

  }
    searchBooks = query =>{
      API.search(query)
        .then(res => this.setState({
         ...this.state,
          books: res.data.items
        }))
        .catch(err => console.log(err));
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

      <div className="App">
       
        <Topbar />
        
          
        
        <input type="text" onChange={this.handleInputChange} ></input>
        <button onClick={this.handleClick} >Submit</button>
       <a href="https://localhost3000/saved"> <button></button>
         </a> 
        

      {this.getSavedBooks()}
      {console.log(this.state)}
        {this.state.books.map((book) => {
          return <Bookcard title={book.volumeInfo.title} Author={book.volumeInfo.authors} img={book.volumeInfo.imageLinks.thumbnail} onClick={this.saveBookClick} id={book.id}/>
          })
        }
      </div>
        
    );
  }
}

export default Search;