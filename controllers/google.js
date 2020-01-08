const axios = require('axios');
const db = require('../models');

const json = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

module.exports = {
  findAll: async function(req, res) {
    const { query: params } = req;
    try {
      const results = await json.get(
        'https://www.googleapis.com/books/v1/volumes',
        { params }
      );

      const apiBooks = results.data.items.filter(
        (res) =>
          res.id &&
          res.volumeInfo.title &&
          res.volumeInfo.infoLink &&
          res.volumeInfo.authors &&
          res.volumeInfo.description &&
          res.volumeInfo.imageLinks &&
          res.volumeInfo.imageLinks.thumbnail
      );

      // Get all books from the database.
      const dbBooks = await db.Book.find();

      // Filter the books we will return to just those entries that are
      // not already in the database.
      const books = apiBooks.filter((apiBook) =>
        dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
      );

      // Send the resing list of books back as JSON.
      return res.json(books);
    } catch (e) {
      return res.status(422).json(e);
    }
  },
};