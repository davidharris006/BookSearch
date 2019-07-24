import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";




export default {
  search: function(query) {
    return axios.get(BASEURL + query );
  },
  getBooks: function() {
    return axios.get("/api/books")
  },

  saveBook: function(book) {
    return axios.post("/api/books", book);
  }
  
};

