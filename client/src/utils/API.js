import axios from "axios";


const json = axios.create({
  headers: {
    'Content-type': 'application/json'
  }
});

export default {
  // Gets books from the Google API
  searchBooks: function(query) {
    return json.get("/api/google", { params: { q: query } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return json.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return json.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return json.post("/api/books", bookData);
  }
};